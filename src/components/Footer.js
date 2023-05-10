import React from 'react';

export default function Footer() {
	return (
		<footer className='footer' role="contentinfo">
			<div className='container'>
				<div className="footer__upper">
					<div className="footer__column footer__column--address">
						<h3>United Kingdom</h3>
						<p>52 Tabernacle St, London, EC2A 4NJ</p>
						<a href="mailto:hello@zeti.co.uk">hello@zeti.co.uk</a>
						<a href="tel:+44(0) 123 456 7890">+44(0) 123 456 7890</a>
					</div>
					<div className="footer__column footer__column--address">
						<h3>Los Angeles</h3>
						<p>2450 Colorado Avenue, Santa Monica, CA 90404</p>
						<a href="mailto:hello@zeti.co.uk">hello@zeti.co.uk</a>
						<a href="tel:+44(0) 123 456 7890">+44(0) 123 456 7890</a>
					</div>
					<div className="footer__column footer__column--address">
						<h3>New York City</h3>
						<p>c/o NYU Future Lab, 370 Jay Street, Brooklyn. NY 11201</p>
						<a href="mailto:hello@zeti.co.uk">hello@zeti.co.uk</a>
						<a href="tel:+44(0) 123 456 7890">+44(0) 123 456 7890</a>
					</div>
					<div className="footer__column footer__column--form">
						<h3>Stay up to date</h3>
					</div>
				</div>

				<div className="footer__lower">
					<div className="footer__copyright">
						<p>©2023 Zeti Limited. All Rights Reserved. Credits</p>
					</div>
					<div className="footer__socials">
						<a href="/" target="_blank" rel="noopener noreferrer">Facebook</a>
						<a href="/" target="_blank" rel="noopener noreferrer">Twitter</a>
						<a href="/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
