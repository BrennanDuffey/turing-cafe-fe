import React from 'react';
import Card from './Card'

const CardContainer = ({reservations}) => {
  const reservationCards = reservations.map(reservation => (<Card {...reservation} key={reservation.id} />))
  return (
    <section>
      {reservationCards}
    </section>
  )
}

export default CardContainer