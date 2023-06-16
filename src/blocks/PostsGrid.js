import clsx from 'clsx';
import React, { useState, useEffect } from 'react';
import ArticleCard from '../components/Article/ArticleCard';
import { useAllPosts } from '../hooks/useAllPosts';
import { useAllInsights } from '../hooks/useAllInsights';
import { useInView } from "react-intersection-observer";

export default function PostsGrid({ data }) {
    // In View
    const { ref, inView } = useInView({
        threshold: .3,
        triggerOnce: true,
    });

    // Options
    const isInsights = data?.variant === 'insights';
    const newsPosts = useAllPosts();
    const insightsPosts = useAllInsights();

    let postsArray = null;

    if (isInsights) {
        postsArray = insightsPosts;
    } else {
        postsArray = newsPosts;
    }

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
		<section inview={inView} ref={ref} className={clsx('block block__recent-articles', {'in-view': inView})}>
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