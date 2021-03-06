import React, { Component } from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import socket from './socket'
import Layout from './pages/Layout'
import { loadRoute } from './actions/layoutActions'
import Poll from './pages/Poll'
import Results from './pages/Results'
import './App.sass'

class App extends Component {
  componentWillMount () {
    this.socket = socket
    loadRoute(browserHistory.getCurrentLocation())
  }
  render () {
    return (
      <div>
        <Router history={browserHistory}>
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
