import clsx from 'clsx';
import React from 'react';
import { useInView } from "react-intersection-observer";

export default function Image({ data }) {
  // In View
  const { ref, inView } = useInView({
    threshold: .3,
    triggerOnce: true,
  });

  return (
    <section inview={inView} ref={ref} className={clsx('block block__image', {'in-view': inView})}>
      <div className="container">

      </div>
    </section>
  )
}
