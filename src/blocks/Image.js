import clsx from 'clsx';
import React from 'react';
import Text from '../components/UI/Text';
import Buttons from '../components/UI/Buttons';
import Image from '../resolvers/Image';
import { useInView } from "react-intersection-observer";

export default function ImageBlock({ data }) {
  // In View
  const { ref, inView } = useInView({
    threshold: .3,
    triggerOnce: true,
  });

  // intro
  const intro = data?.intro;
  const intro_heading = intro?.heading;
  const intro_content = intro?.rich_editor;
  const intro_buttons = intro?.buttons;

  // Image
  const image = data?.image;

  return (
    <section inview={inView} ref={ref} className={clsx('block block__image', {'in-view': inView})}>
      <div className="container">
        <div className="image__intro intro">
          {intro_heading && (
            <h2 className="section-heading">{ intro_heading }</h2>
          )}

          {intro_content && (
            <Text className={clsx('')}>
              {intro_content}
            </Text>
          )}

          {intro_buttons && (
            <Buttons buttons={intro_buttons} className={clsx('')} />
          )}
        </div>

        {image && (
          <Image src={image} alt={""} className="" />
        )}
      </div>
    </section>
  )
}
