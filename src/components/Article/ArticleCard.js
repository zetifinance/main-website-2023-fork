import React from 'react';
import Image from '../../resolvers/Image'

export default function ArticleCard({ data }) {
  const { node: post } = data;
  return (
      <a href={post?.frontmatter?.permalink} className="blog-post">
        <Image src={post?.frontmatter?.thumbnail} alt={""} className="blog-post__thumbnail"/>
        <div className="blog-post__content">
          <div>
            <h3>{post?.frontmatter?.title}</h3>
            <p>{post?.frontmatter?.date}</p>
          </div>
          <span>
            Read more
            <svg width="40px" height="18px" viewBox="0 0 40 18" version="1.1">
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="Home-Concept-1" transform="translate(-295.000000, -689.000000)" fill="#FFFFFF" fillRule="nonzero">
                      <g id="Group-2" transform="translate(84.000000, 148.000000)">
                          <g id="CTA" transform="translate(0.000000, 519.000000)">
                              <g id="right-arrow-(8)" transform="translate(211.000000, 22.000000)">
                                  <path d="M29.4326576,10 L0.566775614,9.95982362 C0.253754086,9.95982362 0,9.52110216 0,8.97991181 C0,8.43872146 0.253754086,8 0.566775614,8 L29.4332244,8.04017638 C29.7462459,8.04017642 30,8.47889787 30,9.02008819 C30,9.56127852 29.7462459,10 29.4332244,10 L29.4326576,10 Z" id="Path"></path>
                                  <path d="M40,9.01182654 C34.6844444,10.9986859 28.0879532,14.3971616 24,18 L27.2243275,9.00047306 L24.0121637,0 C28.0963743,3.60756899 34.6872515,7.01361367 40,9.01182654 Z" id="Path"></path>
                              </g>
                          </g>
                      </g>
                  </g>
              </g>
            </svg>
          </span>
        </div>
      </a>
  );
}
