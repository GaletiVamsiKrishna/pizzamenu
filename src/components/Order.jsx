import React from 'react'

export default function Order({closeHour}) {
  return (
    <div className='order'>
              <p>
                We're open unitl {closeHour}.00. Come visit us & order online.
              </p>
              <button className='btn'>OrderNow</button>
    </div>
  )
}
