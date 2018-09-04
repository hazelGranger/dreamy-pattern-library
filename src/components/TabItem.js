import React, { Component } from 'react';

class TabItem extends  Component{
  // state = {
  //   activeKey: this.props.activeKey?this.props.activeKey:null
  // }
  render(){

    return(
      <div className={"tab__body__item "+this.props.className} >
        {this.props.children}
      </div>
    )
  }
}

export default TabItem;
