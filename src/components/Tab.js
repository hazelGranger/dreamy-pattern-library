import React, { Component } from 'react';

import TabItem from 'components/TabItem';

import 'styles/tab.css'

class Tab extends  Component{
  state = {
    activeKey: this.props.defaultActiveKey?this.props.defaultActiveKey:null
  }

  handleClick = (e)=>{
    this.setState({
      activeKey: parseInt(e.target.id)
    })
  }

  renderTabItems(){
    let children = this.props.children,
        items = [];
    for (var i = 0; i < children.length; i++) {
      items.push(<TabItem key={i} className={
        (children[i].props.id === this.state.activeKey)?" active":""}>{children[i].props.children}</TabItem>)
    }
    return items;
  }

  renderTabHeaders(){
    let children = this.props.children,
        items = [],
        classNames = "tab__header__item";

    for (var i = 0; i < children.length; i++) {
      items.push(<li className={classNames
        + ((children[i].props.id === this.state.activeKey)?" active":"")
      } key={i} id={children[i].props.id} onClick={this.handleClick}>{children[i].props.title}</li>
    )}

    return items;
  }

  render(){

    return(
      <div className="tab" >
        <ul className="tab__header">
          {this.renderTabHeaders()}
        </ul>
        <div className="tab__body">
          {this.renderTabItems()}
        </div>
      </div>
    )
  }
}

export default Tab;
