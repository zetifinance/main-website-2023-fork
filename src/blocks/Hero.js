import clsx from 'clsx'
import React from 'react'
import Buttons from '../components/UI/Buttons'
import Text from '../components/UI/Text'
import Image from '../resolvers/Image'

export default function Hero({ data }) {
	const isLarge = data?.variant === 'large'

  	return (
		<section className={clsx(
			'block block__hero',
			{
			  'block__hero--large': isLarge,
			}
		  )}>
			<div className='container'>
				<div className='hero__content'>
					{data?.main?.heading && (
						<h1 className={clsx('')}>{ data?.main?.heading }</h1>
					)}

					<Text className={clsx('text-lg')}>
						{data?.main?.rich_editor}
					</Text>

					{data?.main?.buttons && (
						<Buttons buttons={data?.main?.buttons} className={clsx('mt-6')} />
					)}
				</div>

				<div className='hero__image'>
					<Image src={data?.image_single} alt={""} className=""/>
				</div>
			</div>
		</section>
  	)
}