import React from 'react'
import Pizza from './Pizza'
import { pizzaData } from '../data'

export default function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className='menu'>
      <h2>Our Menu</h2>

      {/* ShortCircuitOperator */}
      {/* {
        numPizzas > 0 && <ul className='pizzas'>
        {
          pizzas.map((pizza)=> <Pizza pizzaObj = {pizza}  key={pizza.name}/>
          )
        }
      </ul>
      } */}

      {/* Terniary Operator */}
      {
        numPizzas > 0 ? (<ul className='pizzas'>
        {
          pizzas.map((pizza)=> <Pizza pizzaObj = {pizza}  key={pizza.name}/>
          )
        }
      </ul>): (<p>We're stil working on our menu. Please come back later</p>)
      }
      {/* <Pizza pizzaData={pizzaData}/> */}
      
    </main>
  )
}
