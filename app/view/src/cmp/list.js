import React from 'react'
import layoutActions from '../actions/layoutActions'

const click = id => {
  return () => layoutActions(id)
}

const generateList = props => {
  const { index, links } = props
  console.log(index)
  return links.map((e, i) => <li className='is-active' onClick={click(i)} key={i}> {e} </li>)
}

const list = props => {
  return (
    <ul>
      {generateList(props)}
    </ul>
  )
}

export default list
