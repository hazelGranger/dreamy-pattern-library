import React, { Component } from 'react';

import 'styles/collapse.css'

class Collapse extends  Component{
  render(){
    return(
      <div className="collapse">
        {this.props.children}
      </div>
    )
  }
}

export default Collapse;
