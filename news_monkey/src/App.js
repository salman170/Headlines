import React, { Component } from 'react'
import { Navbar } from './Components/Navbar';
import News from './Components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <News pageSize={20}></News>
      </div>
    )
  }
}

