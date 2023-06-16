import clsx from 'clsx';
import React from 'react';
import Text from '../components/UI/Text';
import Buttons from '../components/UI/Buttons';
import Image from '../resolvers/Image';
import { useInView } from "react-intersection-observer";

export default function TextImage({ data }) {
	// In View
    const { ref, inView } = useInView({
        threshold: .3,
        triggerOnce: true,
	});
	  
	// Content
	const content = data?.main?.rich_editor;
	const heading = data?.main?.heading;
	const buttons = data?.main?.buttons;

	// Image
	const image = data?.image;

  	return (
		<section inview={inView} ref={ref} className={clsx('block block__media-text', {'in-view': inView})}>
			<div className={clsx('container')}>
				<div className="media-text__content">
					<div className="">
						{heading && (
							<h2 className={clsx('section-heading section-heading--left')}>{heading}</h2>
						)}
						{content && (
							<Text className={clsx('')}>{content}</Text>
						)}
						{buttons && (
							<Buttons buttons={buttons} className={clsx()} />
						)}
					</div>
				</div>
				<div className="media-text__media">
					{image && (    
						<Image src={image} alt={""} className="" />
					)}
				</div>
			</div>
		</section>
 	)
}