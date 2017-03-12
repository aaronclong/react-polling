import action from './actions'
import store from '../stores/configureStore'

export function currentItem (currentItem) {
  if (Number.isInteger(currentItem)) {
    store.dispatch({
      type: action.ACTIVE_HEADER_LINK,
      currentItem
    })
  }
}
