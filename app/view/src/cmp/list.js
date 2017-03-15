import React from 'react'
import { currentItem } from '../actions/layoutActions'

const click = id => {
  return () => currentItem(id)
}

const generateList = props => {
  const { index, links } = props
  const check = id => id === index ? 'is-active' : ''
  return links.map((e, i) => <li className={check(i)} onClick={click(i)} key={i}> {e} </li>)
}

const list = props => {
  return (
    <ul>
      { generateList(props) }
    </ul>
  )
}

export default list
