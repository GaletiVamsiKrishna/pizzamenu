import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer>
        {new Date().toLocaleTimeString()}. We're Currently Open
      </footer>
    </div>
  )
}
