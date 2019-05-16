import React, { Component } from 'react';
import './App.css';
import CardContainer from './CardContainer';
import Form from './Form.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then(result => this.setState({ reservations: result }))
    .catch(err => console.log(err))
  }

  addReservation = (newReservation) => {
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newReservation)
    }
    fetch('http://localhost:3001/api/v1/reservations', init)
    .then(response => response.json())
    .then(result => this.setState({
      reservations: [...this.state.reservations, result]
    }))
    .catch(err => console.log(err))

  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation} />
        </div>
        <div className='resy-container'>
          <CardContainer reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
