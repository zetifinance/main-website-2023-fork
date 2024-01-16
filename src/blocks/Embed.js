import clsx from 'clsx';
import React from 'react';
import Text from '../components/UI/Text';
import Buttons from '../components/UI/Buttons';
import { useInView } from "react-intersection-observer";
import Image from '../resolvers/Image';

export default function Embed({ data }) {
  // In View
  const { ref, inView } = useInView({
    threshold: .3,
    triggerOnce: true,
  });

  return (
    <section inview={inView} ref={ref} className={clsx({'in-view': inView})}>
      <div className="container">
       {data?.embed && (<div dangerouslySetInnerHTML={data?.embed}></div>)}
      </div>
    </section>
  );
}
