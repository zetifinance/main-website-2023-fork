import clsx from 'clsx'
import React, { useEffect, useState } from 'react';
import Buttons from '../components/UI/Buttons'
import Text from '../components/UI/Text'
import Image from '../resolvers/Image'
import CountUp, { useCountUp } from 'react-countup';
import { useInView } from "react-intersection-observer";

export default function Hero({ data }) {	
	// In View
	const [ ref, inView ] = useInView({
        threshold: .3,
        triggerOnce: true,
	});
	
	// Options
	const isStandard = data?.variant === 'default';
	const isLarge = data?.variant === 'large';
	const isContact = data?.variant === 'contact';
	const isSimple = data?.variant === 'simple';

	const [call, setData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
		  try {
			const response = await fetch('https://zeti.co.uk/api/aggregatestats');
			const jsonData = await response.json();
			setData(jsonData);
		  } catch (error) {
			console.error('Error fetching data:', error);
		  }
		};
	
		fetchData();
	}, []);

  	return (
		<section inView={inView} ref={ref} className={clsx('block block__hero', {'block__hero--standard': isStandard}, {'block__hero--large': isLarge}, {'block__hero--contact': isContact}, {'block__hero--simple': isSimple}, {'in-view': inView})}>
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


					{call ? (
						<div>
							<p>partitionKey: {call.partitionKey}</p>
							<p>rowKey: {call.rowKey}</p>
							<p>totalCo2Saving: {call.totalCo2Saving}</p>
							<p>totalNoxSaving: {call.totalNoxSaving}</p>
						</div>
					) : (
						<p>Loading data...</p>
					)}
				</div>

				{!isSimple &&(
					<div className={clsx('hero__image', {'hero__image--no-gradient': data?.image})}>
						{isLarge &&(
							<div className="hero__image-emissions">
								<h4>Kilograms of CO<sub>2</sub> saved</h4>
								<p><strong><CountUp duration={2} delay={3} start={0} end={5438.80} /></strong></p>
							</div>
						)}

						<Image src={data?.image} alt={""} className=""/>
					</div>
				)}

				{isContact &&(
					<form class="hero__contact-form" name="contact" method="POST" data-netlify="true">
						<input type="hidden" name="form-name" value="contact"/>
						
						<div className="half-width">
							<label htmlFor="name">Your Name:</label>
							<input id="name" type="text" name="name" placeholder="Your Name"/>
						</div>

						<div className="half-width">
							<label htmlFor="email">Your Email Address:</label>
							<input id="email" type="email" name="email" placeholder="Email Address"/>
						</div>

						<div className="half-width">
							<label htmlFor="phone">Your Contact Number:</label>
							<input id="phone" type="tel" name="phone" placeholder="Contact Number"/>
						</div>

						<div className="half-width">
							<label htmlFor="company">Your Company Name:</label>
							<input id="company" type="text" name="company" placeholder="Company name"/>
						</div>

						<div className="full-width">
							<label htmlFor="message">Your Message:</label>
							<textarea id="message" name="message" placeholder="How can we help?"></textarea>
						</div>

						<div className="full-width input-container">
							<input id="terms-conditions" type="radio" name="terms-conditions"  value="I agree to receive industry updates and news from Zeti"/>
							<label className="show" htmlFor="terms-conditions">I agree to receive industry updates and news from Zeti</label>
						</div>
						
						<div className="full-width">
							<p className="small-print">You can unsubscribe from these communications at any time. For more information, please review our <a href="#" target="_blank">Privacy Policy</a>. By clicking submit below, you consent to allow Zeti to store and process the personal information submitted above to provide you with the content requested.</p>
							<button type="submit">Send Message</button>
						</div> 
				  	</form>
				)}
			</div>
		</section>
  	)
}