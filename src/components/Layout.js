import React from 'react'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Offcanvas from '@/components/Offcanvas'

const Layout = ({ nav = false, children }) => {
	return (
		<>
			{nav && <Header/>}
			
			<main className="wrapper">
				<div class="graphic">
					<svg width="1638px" height="1746px" viewBox="0 0 1638 1746" version="1.1" xmlns="http://www.w3.org/2000/svg">
						<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.501229422">
							<g id="dotted-line" transform="translate(1.000000, 0.000000)" stroke="#5ADAFD">
								<g id="Page-1">
									<g id="Home-Concept-1" opacity="0.313114711">
										<g id="dotted-line">
											<path d="M144.470982,1598.52828 L1459.52902,144.471717" id="Line"></path>
											<path d="M320.470982,1745.52828 L1635.52902,291.471717" id="Line"></path>
											<path d="M0.47098214,1454.52828 L1315.52902,0.47171717" id="Line"></path>
										</g>
									</g>
								</g>
							</g>
						</g>
					</svg>
				</div>

				{children}
			</main>
			
			<Footer/>
			<Offcanvas/>
		</>
	)
}

export default Layout
