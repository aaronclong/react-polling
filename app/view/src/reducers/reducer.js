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

const root = combineReducers({test})

export default root
