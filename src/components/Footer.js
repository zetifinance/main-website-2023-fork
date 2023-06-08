import React from 'react';

export default function Footer() {
	return (
		<footer className='footer' role="contentinfo">
			<div className='container'>
				<div className="footer__upper">
					<div className="footer__column footer__column--address">
						<h3>London</h3>
						<p>52 Tabernacle St</p>
						<p>London</p>
						<p>EC2A 4NJ</p>
						<a href="mailto:hello@zeti.group">hello@zeti.group</a>
						<a href="tel:+44(0) 123 456 7890">+44(0) 123 456 7890</a>
					</div>
					<div className="footer__column footer__column--address">
						<h3>Los Angeles</h3>
						<p>2450 Colorado Avenue</p>
						<p>Santa Monica</p>
						<p>CA 90404</p>
						<a href="mailto:hellola@zeti.group">hellola@zeti.group</a>
						<a href="tel:+44(0) 123 456 7890">+44(0) 123 456 7890</a>
					</div>
					<div className="footer__column footer__column--address">
						<h3>New York City</h3>
						<p>Zeti Inc., c/o NYU Future Lab</p>
						<p>370 Jay Street</p>
						<p>NY 11201</p>
						<a href="mailto:hellonyc@zeti.group">hellonyc@zeti.group</a>
						<a href="tel:+44(0) 123 456 7890">+44(0) 123 456 7890</a>
					</div>
					<div className="footer__column footer__column--form">
						<h3>Stay up to date</h3>
						<form name="contact" method="POST" netlify>
							<label htmlFor="footer-email">Your Email:</label>
							<input id="footer-email" type="email" name="footer-email" placeholder="yourname@emailaddress.com"/>
							<button type="submit" className="button button--standard button--yellow">
								<span>Submit</span>
								<svg width="40px" height="18px" viewBox="0 0 40 18" version="1.1">
									<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<g id="Home-Concept-1" transform="translate(-295.000000, -689.000000)" fill="#141F26" fill-rule="nonzero">
											<g id="Group-2" transform="translate(84.000000, 148.000000)">
												<g id="CTA" transform="translate(0.000000, 519.000000)">
													<g id="right-arrow-(8)" transform="translate(211.000000, 22.000000)">
														<path d="M29.4326576,10 L0.566775614,9.95982362 C0.253754086,9.95982362 0,9.52110216 0,8.97991181 C0,8.43872146 0.253754086,8 0.566775614,8 L29.4332244,8.04017638 C29.7462459,8.04017642 30,8.47889787 30,9.02008819 C30,9.56127852 29.7462459,10 29.4332244,10 L29.4326576,10 Z" id="Path"></path>
														<path d="M40,9.01182654 C34.6844444,10.9986859 28.0879532,14.3971616 24,18 L27.2243275,9.00047306 L24.0121637,0 C28.0963743,3.60756899 34.6872515,7.01361367 40,9.01182654 Z" id="Path"></path>
													</g>
												</g>
											</g>
										</g>
									</g>
								</svg>
							</button>
						</form>
					</div>
				</div>

				<div className="footer__lower">
					<div className="footer__copyright">
						<p>©2023 Zeti Limited. All Rights Reserved. Credits</p>
					</div>
					<div className="footer__socials">
						<a href="/" target="_blank" rel="noopener noreferrer">Twitter</a>
						<a href="/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
					</div>
				</div>
			</div>
		</footer>
	);
}