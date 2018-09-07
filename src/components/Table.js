import React, { Component } from 'React';

class Table {
  render(){
    return(
      <table className="table">
        <thead>
          <tr>
            <th>Month</th>
            <th>Savings</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Month</td>
            <td>Savings</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Table;
