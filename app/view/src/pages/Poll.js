/* eslint react/prop-types: 0 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeCity, submit } from '../actions/formAction'
import { send } from '../actions/socketActions'

const form = data => {
  data.preventDefault()
  send()
  submit()
}

const change = city => {
  return () => changeCity(city)
}

const options = props => {
  console.log('Making labels', props)
  return props.map((e, i) => {
    const { city } = e
    return (
      <label className='radio' key={i}>
        <input type='radio' name='cities' onChange={change(city)} />
        <h3>{ city }</h3>
      </label>
    )
  })
}

@connect(store => {
  return {
    form: store.formEvent,
    checkBox: store.socketIO.recieved
  }
})
class Poll extends Component {
  render () {
    let isActive = () => {
      if (this.props.form.sent === true) return '' // '"disabled"'
      return ''
    }
    return (
      <div>
        <h1>Lets do some polling</h1>
        <form onSubmit={form} >
          { options(this.props.checkBox) }
          <div className='control is-grouped'>
            <p className='control'>
              <input type='submit' disabled={isActive()} className='button is-primary' />
            </p>
          </div>
        </form>
      </div>
    )
  }
}

export default Poll
