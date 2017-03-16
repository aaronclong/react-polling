import { createStore } from 'redux'
import Reducers from '../reducers/reducer'

const configurStore = createStore(Reducers, {
  activeHeaderLink: { currentItem: 0 },
  socketIO: { connected: false, socketId: null, recieved: [] }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default configurStore
