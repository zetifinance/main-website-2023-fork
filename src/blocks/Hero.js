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
					{data?.intro?.heading && (
						<h1 className={clsx('')}>{ data?.intro?.heading }</h1>
					)}

					<Text className={clsx('text-lg')}>
						{data?.intro?.content}
					</Text>

					{data?.intro?.buttons && (
						<Buttons buttons={data?.intro?.buttons} className={clsx('mt-6')} />
					)}
				</div>

				<div className='hero__image'>
					<Image src={data?.photo?.image} alt={data?.photo?.alt} className=""/>
				</div>
			</div>
		</section>
  	)
}