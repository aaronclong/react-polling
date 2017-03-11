/* eslint react/prop-types: 0 */
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import list from '../cmp/list'

let links = [<Link to='/'>Poll</Link>, <Link to='/results'>Results</Link>]

class Layout extends Component {
  render () {
    return (
      <div>
        <div className='tabs is-centered'>
          { list(links) }
        </div>
        {this.props.children}
      </div>
    )
  }
}

// Prop Validation
Layout.defaultProps = {
  children: PropTypes.object
}

export default Layout
