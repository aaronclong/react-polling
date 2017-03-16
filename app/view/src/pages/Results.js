/* eslint react/prop-types: 0 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as d3 from 'd3'

@connect(store => {
  console.log(store.socketIO.recieved)
  return { data: store.socketIO.recieved }
})
class Results extends Component {
  componentDidMount () {
    this.d3 = this.refs.chart
    this.pollRender()
  }

  componentDidUpdate () {
    this.pollRender()
  }

  pollRender () {
    d3.select(this.d3).append('svg')
      .attr('width', window.innerWidth / 3)
      .attr('height', window.innerHeight / 3)
      .style('background', '#f4f4f4')
      .selectAll('rect')
        .data(this.props.data)
        .enter().append('rect')
        .attr('width', 40)
        .attr('height', d => d.rank * 2)
        .attr('x', (data, i) => (i * 40) + 10)
  }

  render () {
    return (
      <div>
        <h1>Them Results</h1>
        <div className='chart' ref='chart' />
      </div>
    )
  }
}

export default Results
