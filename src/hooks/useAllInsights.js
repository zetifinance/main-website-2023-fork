import { useStaticQuery, graphql } from 'gatsby';

export const useAllInsights = () => {
  const {
    allMarkdownRemark: { edges: posts },
  } = useStaticQuery(
    graphql`
      query AllInsightsQuery {
        allMarkdownRemark(
          sort: { frontmatter: { date: DESC } }
          filter: { frontmatter: { type: { eq: "post" } }, fileAbsolutePath: { regex: "/content/insights/" } }
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
                permalink
                date(formatString: "MMMM DD, YYYY")
                author
              }
            }
          }
        }
      }
    `,
  );
  return posts;
};