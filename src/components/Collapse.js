import React, { Component } from 'react';

import 'styles/collapse.css'

class Collapse extends  Component{
  state = {
    activeKey: this.props.activeKey?this.props.activeKey:null
  }
  render(){
    const {type, children} = this.props;
    return(
      <div className="collapse" >

        {this.props.children}
      </div>
    )
  }
}

export default Collapse;
