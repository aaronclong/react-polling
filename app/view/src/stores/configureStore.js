import { createStore } from 'redux'
import Reducers from '../reducers/reducer'

const configurStore = createStore(Reducers, {
  activeHeaderLink: { currentItem: 0 },
  socketIO: { connected: false, socketId: null, contents: {} }
})

export default configurStore
