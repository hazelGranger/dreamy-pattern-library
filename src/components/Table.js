import React, { Component } from 'react';

import 'styles/table.css'

class Table extends Component{
  renderthead() {
    const ths = [],
          columns = this.props.columns;
    for (var i = 0; i < columns.length; i++) {
      ths.push(<th key={i}>{columns[i].title}</th>);
    }
    return ths;
  }
  rendertbody() {
    const trs = [],
          tds = [],
          {columns, dataSource} = this.props;
    for (var i = 0; i < dataSource.length; i++) {
      let tds = [];

      for (var j = 0; j < columns.length; j++) {
        tds.push(<td key={j}>{dataSource[i][columns[j].dataIndex]}</td>);
      }
      trs.push(<tr key={i}>
        {tds}
      </tr>);
    }
    return trs;
  }
  render(){
    const {columns, dataSource,type} = this.props;
    let className = "table ";
    switch (type) {
      case "border":
        className += "table-borderer"
      break;
      case "strip":
        className += "table-stripped"
      break;
      case "hover":
        className += "table-hovered"
      break;
      default:
        className += ""
    }
    return(
      <table className={className}>
        <thead>
          <tr>
            {this.renderthead()}
          </tr>
        </thead>
        <tbody>
            {this.rendertbody()}
        </tbody>
      </table>
    )
  }
}

export default Table;
