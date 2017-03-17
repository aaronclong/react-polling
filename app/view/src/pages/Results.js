/* eslint react/prop-types: 0 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as d3 from 'd3'

@connect(store => {
  return { data: store.socketIO.recieved }
})
class Results extends Component {
  componentDidMount () {
    this.d3 = this.refs.chart
    const margin = { top: 20, right: 20, bottom: 30, left: 80 }
    const width = 960 - margin.left - margin.right
    const height = 500 - margin.top - margin.bottom
    this.chart = d3.select(this.d3).append('svg')
                    .attr('width', width + margin.left + margin.right)
                    .attr('height', height + margin.top + margin.bottom)
                    .append('g')
                    .attr('transform',
                          'translate(' + margin.left + ',' + margin.top + ')')
    this.linear = {
      x: d3.scaleLinear().range([0, width]),
      y: d3.scaleBand().range([height, 0]).padding(0.1)
    }
    this.dimensions = { width, height }
    this.pollRender()
  }

  componentDidUpdate () {
    this.pollRender()
  }

  pollRender () {
    this.linear.x.domain([0, d3.max(this.props.data, d => d.rank)])
    this.linear.y.domain(this.props.data.map(d => d.city)).padding(0.1)
    this.chart
      .selectAll('.bar')
      .data(this.props.data)
      .enter().append('rect')
      .attr('class', 'bar')
            // .attr('x', 0)
            .attr('width', d => this.linear.x(d.rank))
            .attr('height', this.linear.y.bandwidth())
            .attr('y', d => this.linear.y(d.city))
    this.chart
         .append('g')
         .attr('transform', 'translate(0,' + this.dimensions.height + ')')
         .call(d3.axisBottom(this.linear.x))
    this.chart
      .append('g')
      .call(d3.axisLeft(this.linear.y))
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
