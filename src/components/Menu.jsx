import React from 'react'
import Pizza from './Pizza'
import { pizzaData } from '../data'

export default function Menu() {
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      {/* <Pizza pizzaData={pizzaData}/> */}
      <ul className='pizzas'>
        {
          pizzaData.map((pizza)=> <Pizza pizzaObj = {pizza}  key={pizza.name}/>
          )
        }
      </ul>
    </main>
  )
}
