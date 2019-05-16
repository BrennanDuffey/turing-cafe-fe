import React from 'react';
import './Card.css';


const Card = (props) => {

  return (
    <article className='card'>
      <h3>{props.name}</h3>
      <p>{props.date}</p>
      <p>{props.time}</p>
      <p>Number of Guests: {props.number}</p>
      <button onClick={() => {props.removeReservation(props.id)}}>Cancel</button>
    </article>
  )
} 

export default Card