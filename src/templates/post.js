import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { format } from 'date-fns';

import Layout from '@/components/Layout'
import DefaultHead from '../components/Head/DefaultHead'
import Image from '../resolvers/Image'
import PageBuilder from '@/components/PageBuilder';

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
              <p>{format(new Date(data?.post?.frontmatter?.date), 'MMMM dd, yyyy')}</p>
            )}
          </div>
          <div className={'hero__image blog__post-hero-image' + (data?.post?.frontmatter?.blocks ? ' hidden' : '')}>
            {data?.post?.frontmatter?.thumbnail && (
              <Image src={data?.post?.frontmatter?.thumbnail} alt={""} />
            )}
          </div>
        </div>
      </section>
      <PageBuilder blocks={data?.post?.frontmatter?.blocks} />
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


export const Head = ({ data }) => {
  let seo = { ...data?.post?.frontmatter?.seo, title: data?.post?.frontmatter?.title, description: data?.post?.fields?.auto_excerpt}
  return (
    <>
      <DefaultHead data={seo}>
        {/* Additonal values here */}
        <meta id="oty" property="og:type" content="article" />
      </DefaultHead>
    </>
  )
}

export default Post

export const PostQuery = graphql`
  query PostQuery($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        auto_excerpt
      }
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
        blocks {
          type
          variant
          columns
          embed
          intro {
            heading
            rich_editor
            buttons {
              button {
                variant
                label
                url
              }
            }
          }
          main {
            heading
            rich_editor
            hubspot_contact_form_id
            buttons {
              button {
                variant
                label
                url
              }
            }
          }
          heading_image {
            image_light {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  quality: 72
                  placeholder: DOMINANT_COLOR
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
            image_dark {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  quality: 72
                  placeholder: DOMINANT_COLOR
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
          image {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                quality: 72
                placeholder: DOMINANT_COLOR
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          images {
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 800
                  quality: 72
                  placeholder: DOMINANT_COLOR
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
          logos {
            link
            image_light {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  quality: 72
                  placeholder: DOMINANT_COLOR
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
            image_dark {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  quality: 72
                  placeholder: DOMINANT_COLOR
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          } 
          video
          slider {
            slide {
              variant
              main {
                heading
                rich_editor
                buttons {
                  button {
                    variant
                    label
                    url
                  }
                }
              }
              image {
                childImageSharp {
                  gatsbyImageData(
                    width: 800
                    quality: 72
                    placeholder: DOMINANT_COLOR
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
              statistic {
                pretext
                stat
                text
                automated_source
              }
              list {
                list_item {
                  heading
                  image {
                    childImageSharp {
                      gatsbyImageData(
                        width: 800
                        quality: 72
                        placeholder: DOMINANT_COLOR
                        formats: [AUTO, WEBP, AVIF]
                      )
                    }
                  }
                }
              }
            }
          }
          testimonials {
            testimonial {
              image {
                childImageSharp {
                  gatsbyImageData(
                    width: 800
                    quality: 72
                    placeholder: DOMINANT_COLOR
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
              testimonial
              name
              job_title
              company_name
            }
          }
          tabs {
            tab {
              heading
              image {
                childImageSharp {
                  gatsbyImageData(
                    layout: FULL_WIDTH
                    quality: 72
                    placeholder: DOMINANT_COLOR
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
              main {
                heading
                rich_editor
                buttons {
                  button {
                    variant
                    label
                    url
                  }
                }
              }
            }
          }
          team {
            team_member {
              image {
                childImageSharp {
                  gatsbyImageData(
                    width: 800
                    quality: 72
                    placeholder: DOMINANT_COLOR
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
              name
              job_role
              linkedin
              bio
            }
          }
          list {
            list_item {
              heading
              rich_editor
              image {
                childImageSharp {
                  gatsbyImageData(
                    width: 800
                    quality: 72
                    placeholder: DOMINANT_COLOR
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
          locations {
            phone_number
            email_address
            location_name
            address
          }
          maps_grid {
            map_name
          }
          accordions {
            heading
            rich_editor
            buttons {
              button {
                variant
                label
                url
              }
            }
          }
          features {
            heading
            rich_editor
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 800
                  quality: 72
                  placeholder: DOMINANT_COLOR
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
    
        }
        ...Seo
      }
    }
  }
`
