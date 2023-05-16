import clsx from 'clsx'
import React from 'react'
import Buttons from '../components/UI/Buttons'
import Text from '../components/UI/Text'
import Image from '../resolvers/Image'

export default function Hero({ data }) {
	const isStandard = data?.variant === 'default';
	const isLarge = data?.variant === 'large';
	const isContact = data?.variant === 'contact';

  	return (
		<section className={clsx('block block__hero', {'block__hero--standard': isStandard}, {'block__hero--large': isLarge}, {'block__hero--contact': isContact})}>
			<div className='container container--float-left'>
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

				<div className='hero__image'>
					<Image src={data?.image} alt={""} className=""/>
				</div>

				{isContact &&(
					<form class="hero__contact-form" name="contact" method="POST" netlify>
						<div className="half-width">
							<label>Your Name:</label>
							<input type="text" name="name" placeholder="Your Name"/>
						</div>

						<div className="half-width">
							<label>Your Email Address:</label>
							<input type="email" name="email" placeholder="Email Address"/>
						</div>

						<div className="half-width">
							<label>Your Contact Number:</label>
							<input type="tel" name="phone" placeholder="Contact Number"/>
						</div>

						<div className="half-width">
							<label>Your Company Name:</label>
							<input type="text" name="company" placeholder="Company name"/>
						</div>

						<div className="full-width">
							<label for="message">Your Message:</label>
							<textarea name="message" id="message" placeholder="How can we help?"></textarea>
						</div>

						<div className="full-width input-container">
							<input type="radio" name="terms-conditions" id="terms-conditions" value="I agree to receive industry updates and news from Zeti"/>
							<label for="terms-conditions" className="show">I agree to receive industry updates and news from Zeti</label>
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