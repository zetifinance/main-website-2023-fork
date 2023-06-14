import clsx from 'clsx';
import React from 'react';
import { useInView } from "react-intersection-observer";

export default function Form({ data }) {
  // In View
  const { ref, inView } = useInView({
    threshold: .3,
    triggerOnce: true,
  });

  return (
    <section inview={inView} className={clsx('block block__form', {'in-view': inView})}>
        
    </section>
  )
}
