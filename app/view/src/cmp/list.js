import React from 'react'

const click = props => { }

const generateList = array => {
  return array.map(e => <li onClick={click}> {e} </li>)
}

const list = props => {
  return (
    <ul>
      {generateList(props)}
    </ul>
  )
}

export default list
