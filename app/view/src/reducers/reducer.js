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
      return Object.assign({}, state, action.currentItem)
  }
  return state
}

const root = combineReducers({ test, activeHeaderLink })

export default root
