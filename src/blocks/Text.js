import clsx from 'clsx';
import React from 'react';
import Text from '../components/UI/Text';
import Buttons from '../components/UI/Buttons';
import { useInView } from "react-intersection-observer";
import Image from '../resolvers/Image';

export default function Content({ data }) {
  // In View
  const { ref, inView } = useInView({
    threshold: .3,
    triggerOnce: true,
  });

  return (
    <section inview={inView} ref={ref} className={clsx('block block__text', {'in-view': inView})}>
      <div className="container">

        {data?.main?.heading && (
          <h2 className={clsx('section-heading')}>{ data?.main?.heading }</h2>
        )}

        {
          data?.heading_image && (<>
            {data?.heading_image?.image_light && (
              <div className={clsx('logos__logo-light')}>
                  <Image src={data?.heading_image?.image_light} alt=""/>
              </div>
          )}
                                      
          {data?.heading_image?.image_dark && (
              <div className={clsx('logos__logo-dark', { 'primary': !data?.heading_image?.image_light })}>
                  <Image src={data?.heading_image?.image_dark} alt=""/>
              </div>
          )}
          </>)
        }

        <Text className={clsx('')}>
          {data?.main?.rich_editor}
        </Text>

        {data?.main?.buttons && (
          <Buttons buttons={data?.main?.buttons} className={clsx('mt-6')}/>
        )}
      </div>
    </section>
  );
}
