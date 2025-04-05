import React from 'react'

export default function Pizza({pizzaData}) {
  return (
    <>
      {
        pizzaData.map((item)=>{
          return(
            <div className='pizza'>
              <img src={item.photoName} alt="" />
              <h3>{item.name}</h3>
              <p>{item.ingredients}</p>
              <span>{item.price}</span>
            </div>
          )
        })
      }
    </>
  )
}
