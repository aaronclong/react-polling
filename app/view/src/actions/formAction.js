import actions from './actions'
import store from '../stores/configureStore'

export function changeCity (city) {
  store.dispatch({ type: actions.FORM_CHANGE, selected: city })
}

export function submit () {
  store.dispatch({ type: actions.FORM_SUBMIT })
}
