import React from 'react';

const Card = (props) => {

  return (
    <article>
      <h3>{props.name}</h3>
      <p>{props.date}</p>
      <p>{props.time}</p>
      <p>{props.number}</p>
      <button onClick={() => {props.removeReservation(props.id)}}>Cancel</button>
    </article>
  )
} 

export default Card