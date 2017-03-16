import React from 'react'
import { changeCity, submit } from '../actions/formAction'
import { send } from '../actions/socketActions'
import store from '../stores/configureStore'

const form = data => {
  data.preventDefault()
  send()
  submit()
}

const Poll = props => {
  let isActive = () => {
    const { formEvent } = store.getState()
    if (formEvent.sent === true) return '' // '"disabled"'
    return ''
  }
  const change = city => {
    return () => changeCity(city)
  }
  return (
    <div>
      <h1>Lets do some polling</h1>
      <form onSubmit={form} >
        <label className='radio'>
          <input type='radio' name='cities' onChange={change('Philly')} />
          <h3>Philly</h3>
        </label>
        <label className='radio'>
          <input type='radio' name='cities' onChange={change('São_Paulo')} />
          <h3>São Paulo</h3>
        </label>
        <label className='radio'>
          <input type='radio' name='cities' onChange={change('NYC')} />
          <h3>New York City</h3>
        </label>
        <label className='radio'>
          <input type='radio' name='cities' onChange={change('Boston')} />
          <h3>Boston</h3>
        </label>
        <div className='control is-grouped'>
          <p className='control'>
            <input type='submit' disabled={isActive()} className='button is-primary' />
          </p>
        </div>
      </form>
    </div>
  )
}

export default Poll
