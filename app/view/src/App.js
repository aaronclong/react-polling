import React, { Component } from 'react'
import logo from './logo.svg'
import io from 'socket.io-client'
import './App.css'

class App extends Component {
  componentWillMount () {
    this.socket = io('http://localhost:4000')
    this.socket.on('connect', () => {
      console.log('Socket id %s', this.socket.id)
    })
  }
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Socket.io Stuff</h2>
        </div>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
