import React, { Component } from 'react';

class Panel extends  Component{
  render(){
    return(
      <div className="collapse_item">
        <div className="collapse__item-header">
          {this.props.title}
        </div>
        <div className="collapse__item-body">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Panel;
