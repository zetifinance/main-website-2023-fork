import React from 'react';
import ArticleCard from './ArticleCard';
import { useRecentArticles } from '../../hooks/useRecentArticles';

export default function Recent() {
  const posts = useRecentArticles();

  return (
    <>
      {posts && posts.map((item, i) => <ArticleCard key={i} data={item} />)}
    </>
  );
}
