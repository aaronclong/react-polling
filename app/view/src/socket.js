import io from 'socket.io-client'
import * as socketAction from './actions/socketActions'

const socket = io('http://localhost:4000')

socket.on('connect', () => {
  console.log('This is happening', socket.id)
  socketAction.onConnect(socket.id)
})

socket.on('reconnect_error', () => socketAction.conError(socket.id))

socket.on('results', data => socketAction.onRecieved(data))

export default socket
