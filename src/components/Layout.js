import React from 'react'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

const Layout = ({ nav = false, children }) => {
	return (
		<>
			{nav && <Header/>}
			
			<main className="wrapper">
				{children}
			</main>
			
			<Footer/>
		</>
	)
}

export default Layout
