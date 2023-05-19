import React from 'react';
import Recent from '../components/Article/Recent';

export default function RecentArticles({ data }) {
	return (
		<section className='block block__recent-articles'>
			<div className="container">
				<div className="recent-articles__posts post-grid">
					<Recent/>
				</div>
			</div>
		</section>
	);
}
