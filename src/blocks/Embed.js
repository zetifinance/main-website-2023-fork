import clsx from 'clsx';
import React from 'react';
import { useInView } from "react-intersection-observer";

export default function Embed({ data }) {
  // In View
  const { ref, inView } = useInView({
    threshold: .3,
    triggerOnce: true,
  });

  return (
    <section inview={inView.toString()} ref={ref} className={clsx({ 'in-view': inView })}>
      <div className="container">
        <div dangerouslySetInnerHTML={{ __html: data?.embed ?? ""}}>
        </div>
      </div>
    </section>
  );
}
