import React from 'react'

export default function TextVideo({ data }) {
  const isVimeo = data?.variant === 'Vimeo';
  const isEmbed = data?.variant === 'embed';
  
  return (
    <section className="block block__video-text">
      
    </section>
  )
}
