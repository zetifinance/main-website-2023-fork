import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import Buttons from '../components/UI/Buttons';
import Text from '../components/UI/Text';
import Image from '../resolvers/Image';
import CountUp from 'react-countup';
import { useInView } from "react-intersection-observer";
import { getAggregateStats } from '../services/AggregateStatsService'

export default function Hero({ data }) {	
	// In View
	const { ref, inView } = useInView({
        threshold: .3,
        triggerOnce: true,
	});

	// Options
	const isStandard = data?.variant === 'default';
	const isLarge = data?.variant === 'large';
	const isContact = data?.variant === 'contact';
	const isSimple = data?.variant === 'simple';
	
	// Functions
	const [call, setData] = useState(null);

	useEffect(() => {
		if(isLarge) {
			const fetchData = async () => {
				try {
					let jsonData = await getAggregateStats()
					setData(jsonData);
				} catch (error) {
					console.error('Error fetching data:', error);
				}
			};
		
			fetchData();
		};

		if(isContact) {
			const script = document.createElement('script');
			script.src='https://js.hsforms.net/forms/v2.js';
			document.body.appendChild(script);
	
			script.addEventListener('load', () => {
				// @TS-ignore
				if (window.hbspt) {
					// @TS-ignore
					window.hbspt.forms.create({
						portalId: "26948233",
						formId: data?.main?.hubspot_contact_form_id ?? "e1d3afe0-34fb-4c5b-8988-f4662666ed38",
						target: '#hubspot-form-contact',
					})
				}
			});
		};
	}, []);

  	return (
		<section inview={inView} ref={ref} className={clsx('block block__hero', {'block__hero--standard': isStandard}, {'block__hero--large': isLarge}, {'block__hero--contact': isContact}, {'block__hero--simple': isSimple}, {'in-view': inView})}>
			<div className={clsx('container', {'container--float-left': isStandard || isLarge})}>
				<div className='hero__content'>
					{data?.main?.heading && (
						<h1 className={clsx('')}>{ data?.main?.heading }</h1>
					)}

					<Text className={clsx('text-lg')}>
						{data?.main?.rich_editor}
					</Text>

					{data?.main?.buttons && (
						<Buttons buttons={data?.main?.buttons} className={clsx('mt-6')}/>
					)}
				</div>

				{!isSimple &&(
					<div className={clsx('hero__image', {'hero__image--no-gradient': data?.image})}>
						{isLarge && (
							<div className={clsx('hero__image-emissions', {'hero__image-emissions--loaded': call})}>
								<h4>Kilograms of CO<sub>2</sub> saved</h4>
								<p><strong><CountUp duration={2} delay={4} start={0} end={call?.totalCo2Saving ?? 7000000} /></strong></p>
							</div>
						)}

						<Image src={data?.image} alt={""} className=""/>
					</div>
				)}

				{isContact &&(
					<div id="hubspot-form-contact" className="hero__contact-form">

					</div>
				)}
			</div>
		</section>
  	)
}
