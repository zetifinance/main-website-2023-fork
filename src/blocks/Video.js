import clsx from 'clsx';
import React from 'react';
import { useInView } from "react-intersection-observer";

export default function Video({ data }) {
  // In View
  const { ref, inView } = useInView({
    threshold: .3,
    triggerOnce: true,
  });


  return (
    <section inview={inView} ref={ref} className={clsx('block block__video', { 'in-view': inView })}>
      <div className="container">
        <video src={"/img/What_is_Zeti_Website.mp4"} playsInline controls>
          <track default kind="captions" srcLang="en" src=""></track>
        </video>
      </div>
    </section>
  )
}