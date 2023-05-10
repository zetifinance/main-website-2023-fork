import React from 'react'
import Link from '../../resolvers/Link'
import clsx from 'clsx'

export default function Button({ className, button, children, ...props }) {
  let buttonStyle = 'button button--standard'
  switch (button?.variant) {
    case 'white':
      buttonStyle = `${buttonStyle}`
      break
    case 'arrow':
      buttonStyle = `${buttonStyle}`
      break
    case 'arrow-white':
      buttonStyle = `${buttonStyle}`
      break
    default:
      buttonStyle = `${buttonStyle} button--standard`
  }

  return (
    <>
      {button?.url ? (
        <Link
          to={button?.url}
          className={clsx(buttonStyle, className)}
          {...props}
        >
          {children}
        </Link>
      ) : (
        <button className={clsx(buttonStyle, className)} {...props}>
          {children}
        </button>
      )}
    </>
  )
}
