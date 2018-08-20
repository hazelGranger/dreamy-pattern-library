import React, { Component } from 'react';

class Col extends Component{
  render(){

    let classNames = "col";

    for (let attr in this.props){
      if (attr && attr!="children" && attr!="className") {
        if (attr !== 'span') {
          classNames += " col-" + attr + '-' + this.props[attr];
        } else{
          classNames += " col-" + this.props[attr];
        }
      }
    }

    return(
      <div className={classNames + " " + this.props.className}>
        { this.props.children }
      </div>
    );
  }
}

export default Col;
