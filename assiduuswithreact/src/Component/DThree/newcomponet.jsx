import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const LineChart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    // Define your data and scales
    const xScale = d3.scaleLinear().domain([0, data.length - 1]).range([0, 300]);
    const yScale = d3.scaleLinear().domain([0, d3.max(data)]).range([150, 0]);

    // Draw x-axis ticks and labels
    const xAxis = d3.axisBottom(xScale);
    svg
      .append('g')
      .call(xAxis)
      .attr('transform', 'translate(0,150)')
      .selectAll('path, line')
      .remove(); // Remove only the axis line and ticks

    // Draw y-axis ticks and labels
    const yAxis = d3.axisLeft(yScale);
    svg
      .append('g')
      .call(yAxis)
      .selectAll('path, line')
      .remove(); // Remove only the axis line and ticks

    // Define the line
    const line = d3.line().x((d, i) => xScale(i)).y((d) => yScale(d)).curve(d3.curveMonotoneX);

    // Draw the curved line
    svg
      .append('path')
      .data([data])
      .attr('d', line)
      .attr('fill', 'none')
      .attr('stroke', 'green');
  }, [data]);

  return (
    <div style={{background:'white'}}>
  <svg ref={svgRef} width={400} height={200} >
      {/* Additional elements can be added here */}
    </svg>
    </div>
  
  );
};

export default LineChart
