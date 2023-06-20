import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '@/components/Layout'
import DefaultHead from '../components/Head/DefaultHead'

const CareerSingle = ({ data }) => {
  return (
    <Layout nav={true}>
      <section className="block block__hero block__hero--simple">
        <div className="container">
          <div className="hero__content">
              <h1 className="">{data?.post?.frontmatter?.title}</h1>
          </div>
        </div>
		  </section>

      <section className="block block__post-single">
        <div className="container">
          <article dangerouslySetInnerHTML={{ __html: data?.post?.html }}>

          </article>
        </div>
      </section>
    </Layout>
  )
}

CareerSingle.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export const Head = ({ data }) => (
  <>
    <DefaultHead data={data?.post?.frontmatter?.seo}>
      {/* Additonal values here */}
      <meta id="oty" property="og:type" content="article" />
    </DefaultHead>
  </>
)

export default CareerSingle

export const basicPageQuery = graphql`
  query PostQuery($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        id
        title
        ...Seo
      }
    }
  }
`
