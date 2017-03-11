/* eslint react/prop-types: 0 */
import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import list from '../cmp/list'

let links = [<Link to='/'>Poll</Link>, <Link to='/results'>Results</Link>]

@connect(store => {
  index: store.activeHeaderLink.currentItem
})
class Layout extends Component {
  render () {
    return (
    <div>
      <div className='tabs is-centered'>
        { list({ index: this.props.index, links }) }
      </div>
      { this.props.children }
    </div>
   )
  }
}

export default Layout
