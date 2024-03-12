import React, { useEffect } from 'react';
import footerData from "../settings/footer.json"

export default function Footer() {
	useEffect(() => {
		const script = document.createElement('script');
		script.src = 'https://js.hsforms.net/forms/v2.js';
		document.body.appendChild(script);

		script.addEventListener('load', () => {
			// @TS-ignore
			if (window.hbspt) {
				// @TS-ignore
				window.hbspt.forms.create({
					portalId: "26948233",
					formId: "7c6757eb-1427-4457-acad-cc1e111800b8",
					target: '#hubspot-form-newsletter',
				})
			}
		});
	}, []);

	return (
		<footer className='footer' role="contentinfo">
			<div className='container'>
				<div className="footer__upper">
					<div className="footer__column footer__column--address">
						<h3>London</h3>
						<p>Zeti Ltd.</p>
						<p>52 Tabernacle St</p>
						<p>London</p>
						<p>EC2A 4NJ</p>
						<a href="mailto:hello@zeti.group">hello@zeti.group</a>
					</div>
					<div className="footer__column footer__column--address">
						<h3>Los Angeles</h3>
						<p>Zeti, Inc.</p>
						<p>2450 Colorado Avenue</p>
						<p>Santa Monica</p>
						<p>CA 90404</p>
						<a href="mailto:hellola@zeti.group">hellola@zeti.group</a>
					</div>
					<div className="footer__column footer__column--address">
						<h3>New York City</h3>
						<p>Zeti, Inc.</p>
						<p>c/o NYU Future Lab</p>
						<p>370 Jay Street</p>
						<p>NY 11201</p>
						<a href="mailto:hellonyc@zeti.group">hellonyc@zeti.group</a>
					</div>
					<div className="footer__column footer__column--form">
						<h3>Stay up to date</h3>
						<div id="hubspot-form-newsletter"></div>
					</div>
				</div>

				<div className="footer__lower">
					<div className="footer__copyright">
						<p>©2023 Zeti Limited. All Rights Reserved. </p>
						<a href="/privacy-and-cookies/" rel="noreferrer noopener" target="_blank">Privacy & Cookies Policy</a>
					</div>
					<div className="footer__socials">
						{
							footerData.nav.map((navItem) => {
								return (
									<a href={navItem.permalink} target="_blank" rel="noopener noreferrer">{navItem.name}</a>
								)
							})
						}
					</div>
				</div>
			</div>
		</footer>
	);
}