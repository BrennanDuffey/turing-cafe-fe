import React from 'react';

const Card = (props) => {

console.log(props)
  return (
    <article>
      <h3>{props.name}</h3>
      <p>{props.date}</p>
      <p>{props.time}</p>
      <p>{props.number}</p>
      <button>Cancel</button>
    </article>
  )
} 

export default Card