import React, { useState, useEffect } from 'react'
import ArticleCard from '../components/Article/ArticleCard';
import { useAllPosts } from '../hooks/useAllPosts';

export default function PostsGrid({ data }) {
    const allNews = useAllPosts();

    // State for the list
    const [list, setList] = useState([...allNews.slice(0, 9)])

    // State to trigger oad more
    const [loadMore, setLoadMore] = useState(false)

    // State of whether there is more to load
    const [hasMore, setHasMore] = useState(allNews.length > 9)

    // Load more button click
    const handleLoadMore = () => {
        setLoadMore(true)
    }

    // Handle loading more articles
    useEffect(() => {
        if (loadMore && hasMore) {
        const currentLength = list.length
        const isMore = currentLength < allNews.length
        const nextResults = isMore
            ? allNews.slice(currentLength, currentLength + 9)
            : []
        setList([...list, ...nextResults])
        setLoadMore(false)
        }
    }, [loadMore, hasMore]) //eslint-disable-line

    //Check if there is more
    useEffect(() => {
        const isMore = list.length < allNews.length
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