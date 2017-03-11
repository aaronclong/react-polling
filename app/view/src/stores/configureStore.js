import { createStore } from 'redux'
import Reducers from '../reducers/reducer'

const configurStore = createStore(Reducers, {
  activeHeaderLink: { currentItem: 0 }
  // socketId: null
})

export default configurStore
