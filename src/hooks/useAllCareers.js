import { useStaticQuery, graphql } from 'gatsby';

export const useAllCareers = () => {
  const {
    allMarkdownRemark: { edges: posts },
  } = useStaticQuery(
    graphql`
      query AllCareersQuery {
        allMarkdownRemark(
          sort: { frontmatter: { date: DESC } }
          filter: { frontmatter: { type: { eq: "post" } }, fileAbsolutePath: { regex: "/content/careers/" } }
        ) {
          edges {
            node {
              id
              excerpt(pruneLength: 120)
              fields {
                slug
              }
              frontmatter {
                title
                excerpt
                location
                hours @include(if: true)
              }
            }
          }
        }
      }
    `
  );
  return posts;
};