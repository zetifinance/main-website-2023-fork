import clsx from 'clsx';
import React from 'react';
import { useInView } from "react-intersection-observer";

export default function Video({ data }) {
  // In View
  const { ref, inView } = useInView({
    threshold: .3,
    triggerOnce: true,
  });

  // Options
  const isEmbed = data?.variant === 'Embed';
  const video = data?.video;

  return (
    <section inview={inView} className={clsx('block block__video', {'in-view': inView})}>
          { 
            isEmbed ? (
              <div className="container" dangerouslySetInnerHTML={{ __html: video }}/>
            ) : (
              <div className="container">
                <video src={video} playsInline controls>
                  <track default kind="captions" srclang="en" src=""></track>
                </video>
              </div>
            )
          }
    </section>
  )
}