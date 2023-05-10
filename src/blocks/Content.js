import React from 'react';
import Text from '../components/UI/Text';

export default function Content({ data }) {
  return (
    <section className='block block__content py-10 lg:py-16'>
        {data?.content && (
          <Text className='mx-auto w-full max-w-6xl'>{data?.content}</Text>
        )}
    </section>
  );
}
