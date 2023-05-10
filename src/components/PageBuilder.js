import React from 'react';
import { graphql } from 'gatsby';

import Hero from '@/blocks/Hero';
import Content from '../blocks/Content';
import ContentImage from '../blocks/ContentImage';
import ContentVideo from '../blocks/ContentVideo';
import Image from '../blocks/Image';
import Video from '../blocks/Video';
import LogoGrid from '../blocks/LogoGrid';
import Tabs from '../blocks/Tabs';
import Slider from '../blocks/Slider';
import Testimonials from '../blocks/Testimonials';
import RecentArticles from '../blocks/RecentArticles';
import Form from '../blocks/Form';


export default function PageBuilder({ blocks, preview = false }) {
  return (
    <>
      {blocks &&
        blocks.map((block, i) => {
          switch (block.type) {
            case 'hero':
              return <Hero key={i} data={block} />;
            case 'content':
              return <Content key={i} data={block} preview={preview} />;
            case 'content_image':
              return <ContentImage key={i} data={block} preview={preview} />;
            case 'content_video':
              return <ContentVideo key={i} data={block} preview={preview} />;
            case 'image':
              return <Image key={i} data={block} preview={preview} />;
            case 'video':
              return <Video key={i} data={block} preview={preview} />;
            case 'logo_grid':
              return <LogoGrid key={i} data={block} preview={preview} />;
            case 'tabs':
              return <Tabs key={i} data={block} preview={preview} />;
            case 'slider':
              return <Slider key={i} data={block} preview={preview} />;
            case 'testimonials':
              return <Testimonials key={i} data={block} preview={preview} />;
            case 'recentArticles':
              return <RecentArticles key={i} data={block} preview={preview} />;
            case 'form':
              return <Form key={i} data={block} preview={preview} />;
            
            default:
              return (
                <div className='container mx-auto'>
                  <div className='text-center'>
                    Missing Section {block.type}
                  </div>
                </div>
              );
          }
        })}
    </>
  );
}

export const query = graphql`
  fragment Blocks on MarkdownRemarkFrontmatter {
    blocks {
      type
      variant
      photo {
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
        alt
      }
      buttons {
        button {
          content
          url
          variant
        }
      }
      title
      content
      intro {
        heading
        content
        buttons {
          button {
            content
            url
            variant
          }
        }
      }
    }
  }
`;