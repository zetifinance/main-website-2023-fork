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
						<p>Zeti inc., c/o NYU Future Lab</p>
						<p>370 Jay Street</p>
						<p>NY 11201</p>
						<a href="mailto:hellonyc@zeti.group">hellonyc@zeti.group</a>
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
						<a href="/" target="_blank" rel="noopener noreferrer">Twitter</a>
						<a href="/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
					</div>
				</div>
			</div>
		</footer>
	);
}