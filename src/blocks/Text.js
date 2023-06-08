import React from 'react';
import Text from '../components/UI/Text';

export default function Content({ data }) {
  return (
    <section className='block block__text'>
      <div className="container">
        {data?.main?.rich_editor && (
          <Text className=''>{data?.main?.rich_editor}</Text>
        )}
      </div>
    </section>
  );
}
