/* eslint react/prop-types: 0 */
import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import list from '../cmp/list'

let links = [<Link to='/'>Poll</Link>, <Link to='/results'>Results</Link>]

@connect(store => {
  return { index: store.activeHeaderLink.currentItem }
})
class Layout extends Component {
  render () {
    return (
      <div>
        <div className='hero'>
          <div className='hero-body'>
            <h2 className='title'>Messing Around with Socket.io</h2>
            <h3 className='subtitle'>by Aaron Long</h3>
            <div className='tabs is-centered'>
              { list({ index: this.props.index, links }) }
            </div>
          </div>
        </div>
        <section className='section'>
          <div className='container'>
            { this.props.children }
          </div>
        </section>
      </div>
    )
  }
}

export default Layout
