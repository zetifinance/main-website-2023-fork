import clsx from 'clsx';
import React from 'react';
import Text from '../components/UI/Text';
import Buttons from '../components/UI/Buttons';
import { useInView } from "react-intersection-observer";

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
