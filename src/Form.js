import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: 0
    }
  }

  handleChange = (e) => {
    if (e.target.name === 'number') {
      this.setState({ [e.target.name]: parseInt(e.target.value) })
    } else {
      this.setState({ [e.target.name]: e.target.value })
    }
  }

  render() {
    return (
      <form>
        <input placeholder='Name' name='name' onChange={this.handleChange}/>
        <input placeholder='Date (mm/dd)' name='date' onChange={this.handleChange}/>
        <input placeholder='Time' name='time' onChange={this.handleChange}/>
        <input placeholder='Number of Guests' name='number' onChange={this.handleChange}/>
      </form>
    )
  }
}

export default Form;