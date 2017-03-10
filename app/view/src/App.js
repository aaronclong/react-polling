import React, { Component } from 'react'
import { Router, Route, Link, hashHistory } from 'react-router'
import io from 'socket.io-client'
import list from './cmp/list'
import Poll from './pages/Poll'
import './App.sass'

class App extends Component {
  componentWillMount () {
    this.socket = io('http://localhost:4000')
    this.socket.on('connect', () => {
      console.log('Socket id %s', this.socket.id)
    })
  }
  render () {
    let links = [<Link to='/'>Poll</Link>]
    return (
      <div className='App'>
        <div className='tabs is-centered'>
          { list(links) }
        </div>
        <div>
          <Router history={hashHistory}>
            <Route path='/' component={Poll} />
          </Router>
        </div>
      </div>
    )
  }
}

export default App
