import clsx from 'clsx'
import React from 'react'
import Text from '../components/UI/Text'
import Buttons from '../components/UI/Buttons'
import Image from '../resolvers/Image'

export default function TextImage({ data }) {
	// Variant
	const staggered = data.variant === 'staggered';
	  
	// Content
	const content = data.main.rich_editor;
	const heading = data.main.heading;
	const buttons = data.main.buttons;

	// Image
	const image = data.image;

  	return (
		<section className="block block__media-text">
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