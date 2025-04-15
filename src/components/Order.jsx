import React from 'react'

export default function Order({closeHour, openHour}) {
  return (
    <div className='order'>
              <p>
                We're open from {openHour}.00 AM unitl {closeHour}.00 PM. Come visit us & order online.
              </p>
              <button className='btn'>OrderNow</button>
    </div>
  )
}
