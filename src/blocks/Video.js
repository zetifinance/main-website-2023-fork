import React from 'react'

export default function Video({ data }) {
  const isEmbed = data?.variant === 'Embed';
  const video = data?.video;

  return (
    <section className="block block__video">
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