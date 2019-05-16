import React, { Component } from 'react';
import './App.css';
import CardContainer from './CardContainer';

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
  }
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <CardContainer reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
