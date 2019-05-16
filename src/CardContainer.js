import React from 'react';
import Card from './Card';
import './CardContainer.css';


const CardContainer = ({reservations, removeReservation}) => {
  const reservationCards = reservations.map(reservation => (<Card {...reservation} key={reservation.id} removeReservation={removeReservation} />))
  return (
    <section className='card-container'>
      {reservationCards}
    </section>
  )
}

export default CardContainer