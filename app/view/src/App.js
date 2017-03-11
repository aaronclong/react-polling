import React, { Component } from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import io from 'socket.io-client'
import Layout from './pages/Layout'
import Poll from './pages/Poll'
import Results from './pages/Results'
import './App.sass'

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
        <Router history={hashHistory}>
          <Route path='/' component={Layout} >
            <IndexRoute component={Poll} />
            <Route path='results' component={Results} />
          </Route>
        </Router>
      </div>
    )
  }
}

export default App
