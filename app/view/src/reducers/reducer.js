import { combineReducers } from 'redux'
import actions from '../actions/actions.js'

const { SEND_RESULTS } = actions

function test (state = { something: [] }, action) {
  switch (action.type) {
    case SEND_RESULTS:
      return state
  }
  return state
}

function activeHeaderLink (state = { currentIndex: 0 }, action) {
  switch (action.type) {
    case actions.ACTIVE_HEADER_LINK:
      return Object.assign({}, state, { currentItem: action.currentItem })
    case actions.ACTIVE_HEADER_LOAD:
      console.log('Happening')
      return Object.assign({}, state, { currentItem: action.currentItem })
  }
  return state
}

function socketIO (state = { connected: false,
  socketId: null,
  recieved: []
}, action) {
  if (action.type.search('SOCKET_IO_') <= -1) return state
  switch (action.type) {
    case actions.SOCKET_IO_CONNECT:
      const { connected, socketId } = action
      return Object.assign({}, state, { connected, socketId })
    case actions.SOCKET_IO_RECIEVE:
      return Object.assign({}, state, { recieved: action.recieved })
    case actions.SOCKET_IO_SEND:
      return Object.assign({}, state, action.contents)
  }
}

function formEvent (state = { selected: null, sent: false }, action) {
  switch (action.type) {
    case actions.FORM_CHANGE:
      return Object.assign({}, state, { selected: action.selected })
    case actions.FORM_SUBMIT:
      return Object.assign({}, state, { selected: null, sent: true })
  }
  return state
}

const root = combineReducers({ test, activeHeaderLink, socketIO, formEvent })

export default root
