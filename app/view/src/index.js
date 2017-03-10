import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'

const app = () => {
  return (
    <Provider store={{}}>
      <App />
    </Provider>
  )
}

ReactDOM.render(
  app(),
  document.getElementById('root')
)
