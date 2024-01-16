import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '@/components/Layout'
import PageBuilder from '@/components/PageBuilder'
import DefaultHead from '../components/Head/DefaultHead'

const Page = ({ data }) => {
  return (
    <Layout nav={true}>
      <PageBuilder blocks={data.page.frontmatter.blocks} />
    </Layout>
  )
}

Page.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default Page

export const Head = ({ data }) => {
  let seo = { ...data?.page?.frontmatter?.seo, title: data?.page?.frontmatter?.title, description: data?.page?.fields?.auto_excerpt }
  return (
    <>
      <DefaultHead data={seo}>
        {/* Additonal values here */}
        <meta id="type" property="og:type" content="website" />
      </DefaultHead>
    </>
  )
}

export const basicPageQuery = graphql`
  query BasicPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      id
      fields {
        slug
        auto_excerpt
      }
      html
      frontmatter {
        id
        title
        ...Blocks
        ...Seo
      }
    }
  }
`
