import React from 'react';
import Card from './Card'

const CardContainer = ({reservations, removeReservation}) => {
  const reservationCards = reservations.map(reservation => (<Card {...reservation} key={reservation.id} removeReservation={removeReservation} />))
  return (
    <section>
      {reservationCards}
    </section>
  )
}

export default CardContainer