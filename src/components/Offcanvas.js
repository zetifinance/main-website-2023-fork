import React, { useEffect } from 'react';
import nav from '../settings/main.json'
import Link from '../resolvers/Link'
import { closeMobileMenuAfterNav } from '../lib/main'

export default function Offcanvas() {
    useEffect(() => {
        closeMobileMenuAfterNav();
    }, []);
    
	return (
		<div className="offcanvas">
            <div className="offcanvas__inner">
                <nav className="nav-mobile">
                    <Link to="/">Homepage</Link>
                    {nav.nav.map((item, i) => (
                        <Link to={item.permalink} key={i}>
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div>
                    <div className="offcanvas__socials">
						<a href="/" target="_blank" rel="noopener noreferrer">Facebook</a>
						<a href="/" target="_blank" rel="noopener noreferrer">Twitter</a>
						<a href="/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
					</div>
					<div className="offcanvas__copyright">
						<p>©2023 Zeti Limited. All Rights Reserved. Credits</p>
					</div>
				</div>
            </div>
        </div>
	);
}