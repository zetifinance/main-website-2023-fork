import clsx from 'clsx';
import React from 'react';
import Recent from '../components/Article/Recent';
import { useInView } from "react-intersection-observer";

export default function RecentArticles({ data }) {
	// In View
    const { ref, inView } = useInView({
        threshold: .3,
        triggerOnce: true,
	});
	
	return (
		<section inview={inView} className={clsx('block block__recent-articles', {'in-view': inView})}>
			<div className="container">
				<div className="recent-articles__posts post-grid">
					<Recent/>
				</div>
			</div>
		</section>
	);
}
