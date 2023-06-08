import clsx from 'clsx'
import React from 'react';
import Text from '../components/UI/Text';
import Buttons from '../components/UI/Buttons'

export default function Content({ data }) {
  return (
    <section className='block block__text'>
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
