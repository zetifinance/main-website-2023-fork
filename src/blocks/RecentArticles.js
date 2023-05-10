import React from 'react';
import Recent from '../components/Article/Recent';

export default function RecentArticles({ data, preview }) {
  return (
    <section className='block block__recent-articles'>
        <h2>{data?.title}</h2>
        {preview ? 'Articles will show up here' : <Recent />}
    </section>
  );
}
