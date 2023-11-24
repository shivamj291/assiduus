import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const TableGraph = ({ data }) => {
  const tableRef = useRef();

  useEffect(() => {
    // Remove existing table content
    d3.select(tableRef.current).selectAll('*').remove();

    // Append a table
    const table = d3.select(tableRef.current).append('table');

    // Append the header row
    table
      .append('thead')
      .append('tr')
      .selectAll('th')
      .data(['Account', 'This Month', 'YTD'])
      .enter()
      .append('th')
      .text((d) => d);

    // Append the data rows
    const rows = table.append('tbody').selectAll('tr').data(data).enter().append('tr');

    // Append cells for each row
    rows
      .selectAll('td')
      .data((d) => [d.account, d.thisMonth, d.ytd])
      .enter()
      .append('td')
      .text((d) => d);
  }, [data]);

  return (
    <div style={{background:'white',display:'flex',justifyContent:'center',alignItems:'center'}}>
  <div ref={tableRef} >
      {/* The table will be rendered inside this div */}
    </div>
    </div>
  
  );
};



export default TableGraph;
