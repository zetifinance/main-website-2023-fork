import React from 'react';
import ArticleCard from '../components/Article/ArticleCard';
import { useAllPosts } from '../hooks/useAllPosts';

export default function PostsGrid({ data }) {
    const posts = useAllPosts();

	return (
		<section className='block block__recent-articles'>
			<div className="container">
				<div className="recent-articles__posts post-grid">
                    {posts && posts.map((item, i) => <ArticleCard key={i} data={item} />)}
				</div>
			</div>
		</section>
	);
}