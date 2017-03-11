import { createStore } from 'redux'
import Reducers from '../reducers/reducer'

const configurStore = preloadedState => {
  return createStore(Reducers, preloadedState)
}

export default configurStore({})
