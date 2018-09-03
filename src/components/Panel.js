import React, { Component } from 'react';

import 'styles/collapse.css'

class Panel extends  Component{

  state = {
    active: false
  }

  handleClick = ()=>{

    this.setState({
      active: !this.state.active
    })
  }

  render(){
    return(
      <div className={"collapse_item " + (this.state.active?"collapse_item-active":"")}>
        <div className="collapse__item-header" onClick={this.handleClick}>
          {this.props.title}
        </div>
        <div className="collapse__item-body">
          <div className="collapse__item-body__content">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default Panel;
