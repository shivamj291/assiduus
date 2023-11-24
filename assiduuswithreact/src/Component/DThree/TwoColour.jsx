import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const TwoColor = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = [30, 40, 20, 50, 80];
    const months = ['January', 'February', 'March', 'April', 'May'];

    const svg = d3.select(chartRef.current)
      .append('svg')
      .attr('width', 400)
      .attr('height', 250);

    // Append the first set of rectangles (green)
    svg.selectAll('.green-rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'green-rect')
      .attr('x', (d, i) => i * 80 + 10) // Add a gap of 10 units
      .attr('y', d => 100 - d / 2) // Start from the bottom
      .attr('width', 15)
      .attr('height', d => d / 2)
      .attr('fill', 'blue');

    // Append the second set of rectangles (blue)
    svg.selectAll('.blue-rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'blue-rect')
      .attr('x', (d, i) => i * 80 + 10) // Add a gap of 10 units
      .attr('y', d => 100) // Start from the middle
      .attr('width', 15)
      .attr('height', d => d / 2)
      .attr('fill', 'green');

    // Create month labels
    svg.selectAll('text')
      .data(months)
      .enter()
      .append('text')
      .text((d, i) => d)
      .attr('x', (d, i) => i * 80 + 17.5) // Adjust x position for centering with the gap
      .attr('y', 150) // Adjust y position to be below the bars
      .attr('text-anchor', 'middle')
      .attr('font-size', '12px');

    return () => {
      svg.remove(); // Cleanup the SVG element
      console.log('TwoColor effect cleanup');
    };
  }, []); // Add an empty dependency array to run only once after the initial render

  return <div ref={chartRef} style={{background:'white'}}></div>;
};

export default TwoColor;
