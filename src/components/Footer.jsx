import React from 'react'

export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <div>
      <footer>
        {/* {new Date().toLocaleTimeString()}. We're Currently Open */}
        {/* ShortCircuitOperator */}
        {/* {
        
          isOpen && (
            <div className='order'>
              <p>
                We're open unitl {closeHour}.00. Come visit us & order online.
              </p>
              <button className='btn'>OrderNow</button>
            </div>
          )
        } */}
        {/* Terniary Operator Conditional Rendering */}
        {
          isOpen ? (
            <div className='order'>
              <p>
                We're open unitl {closeHour}.00. Come visit us & order online.
              </p>
              <button className='btn'>OrderNow</button>
            </div>
          ) : (
            <p>
              We're happy to welcome you between {openHour}:00 and {closeHour}:00.
            </p>
          )
        }
      </footer>
    </div>
  )
}
