import React, { useState, useEffect } from 'react'
import ArticleCard from '../components/Article/ArticleCard';
import { useAllPosts, useAllInsights } from '../hooks/postQueries';

export default function PostsGrid({ data }) {

    
    const postsArray = useAllPosts();

    // State for the list
    const [list, setList] = useState([...postsArray.slice(0, 9)])

    // State to trigger oad more
    const [loadMore, setLoadMore] = useState(false)

    // State of whether there is more to load
    const [hasMore, setHasMore] = useState(postsArray.length > 9)

    // Load more button click
    const handleLoadMore = () => {
        setLoadMore(true)
    }

    // Handle loading more articles
    useEffect(() => {
        if (loadMore && hasMore) {
        const currentLength = list.length
        const isMore = currentLength < postsArray.length
        const nextResults = isMore
            ? postsArray.slice(currentLength, currentLength + 9)
            : []
        setList([...list, ...nextResults])
        setLoadMore(false)
        }
    }, [loadMore, hasMore]) //eslint-disable-line

    //Check if there is more
    useEffect(() => {
        const isMore = list.length < postsArray.length
        setHasMore(isMore)
    }, [list]) //eslint-disable-line

	return (
		<section className='block block__recent-articles'>
			<div className="container">
				<div className="recent-articles__posts post-grid">
                    {list.map((article) => (
                        <ArticleCard key={article.id} data={article} />
                    ))}
				</div>


                {hasMore &&(
                    <div className="load-more">
                        <button className="button button--standard" onClick={handleLoadMore}>Load More</button>
                    </div>
                )}
			</div>
		</section>
	);
}