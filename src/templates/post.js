import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { format } from 'date-fns';

import Layout from '@/components/Layout'
import DefaultHead from '../components/Head/DefaultHead'
import Image from '../resolvers/Image'

const Post = ({ data }) => {
  return (
    <Layout nav={true}>
      <section className="block block__hero block__hero--simple">
        <div className="container">
          <div className="hero__content">
            {data?.post?.frontmatter?.title && (
              <h1 className="">{data?.post?.frontmatter?.title}</h1>
            )}
            {data?.post?.frontmatter?.date && (
              <p>{format(new Date(data?.post?.frontmatter?.date),'MMMM dd, yyyy')}</p>
            )}
          </div>
          <div className='hero__image'>
            {data?.post?.frontmatter?.thumbnail && (
						  <Image src={data?.post?.frontmatter?.thumbnail} alt={""} className=""/>
            )}
					</div>
        </div>
		  </section>

      {data?.post?.html && (
        <section className="block block__post-single">
          <div className="container">
            <article dangerouslySetInnerHTML={{ __html: data?.post?.html }}>

            </article>
          </div>
        </section>
      )}
    </Layout>
  )
}

Post.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}


export const Head = ({ data }) => (
  <>
    {data?.post?.frontmatter?.seo && (
      <DefaultHead data={data?.post?.frontmatter?.seo}>
        {/* Additonal values here */}
        <meta id="oty" property="og:type" content="article" />
      </DefaultHead>
    )}
  </>
)

export default Post

export const basicPageQuery = graphql`
  query PostQuery($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        id
        title
        date
        thumbnail {
          childImageSharp {
            gatsbyImageData(
              width: 690
              quality: 72
              layout: FULL_WIDTH
              placeholder: DOMINANT_COLOR
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        ...Seo
      }
    }
  }
`
