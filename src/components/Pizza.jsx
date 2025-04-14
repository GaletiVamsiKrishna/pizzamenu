import React from 'react'

export default function Pizza({pizzaObj}) {

  // If you wanted to load the entire component go with if else conditional rendering

  // If else method :
  if(pizzaObj.soldOut) return null;
  
  return (
    <li className='pizza'>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
         
            <div>
              <h3>{pizzaObj.name}</h3>
              <p>{pizzaObj.ingredients}</p>
              <span>{pizzaObj.price}</span>
            </div>
          
 
    </li>
  )
}
