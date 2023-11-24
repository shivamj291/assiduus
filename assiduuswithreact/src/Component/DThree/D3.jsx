import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const D3Chart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    console.log('Component rendered');
  });

  useEffect(() => {
    const data = [30, 40, 20, 50, 80];
    const months = ['January', 'February', 'March', 'April', 'May'];

    const svg = d3.select(chartRef.current)
      .append('svg')
      .attr('width', 400)
      .attr('height', 250);
      
    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 80)
      .attr('y', d => 200 - d)
      .attr('width', 15)
      .attr('height', d => d)
      .attr('fill', 'green');
  
    // Create month labels
    svg.selectAll('text')
      .data(months)
      .enter()
      .append('text')
      .text((d, i) => d)
      .attr('x', (d, i) => i * 80 + 7.5) // Adjust x position for centering
      .attr('y', 220) // Adjust y position
      .attr('text-anchor', 'middle')
      .attr('font-size', '12px');
      
    return () => {
        svg.remove(); // Cleanup the SVG element
        console.log('D3Chart effect cleanup');
      };
  }, []); // Add an empty dependency array to run only once after the initial render
  
  return <div ref={chartRef} style={{background:'white'}}></div>;
};

export default D3Chart;
