import actions from './actions'
import store from '../stores/configureStore'
import socket from '../socket'

export function onConnect (id) {
  store.dispatch({ type: actions.SOCKET_IO_CONNECT, socketId: id, connected: true })
}

export function conError () {
  store.dispatch({ type: actions.SOCKET_IO_CONNECT, socketId: '', connected: false })
}

export function onRecieved (data) {
  store.dispatch({ type: actions.SOCKET_IO_RECIEVE, recieved: data })
}

export function send () {
  const { formEvent } = store.getState()
  if (formEvent.selected === null) return
  store.dispatch({ type: actions.SOCKET_IO_SEND, selected: formEvent.selected })
  const poll = { city: formEvent.selected }
  socket.emit('poll', poll)
}
