import actions from './actions'
import store from '../stores/configureStore'

export function currentItem (currentItem) {
  if (Number.isInteger(currentItem)) {
    store.dispatch({
      type: actions.ACTIVE_HEADER_LINK,
      currentItem
    })
  }
}

export function loadRoute (browser) {
  const uri = browser.pathname === '/' ? 0 : 1
  store.dispatch({ type: actions.ACTIVE_HEADER_LOAD, currentItem: uri })
}
