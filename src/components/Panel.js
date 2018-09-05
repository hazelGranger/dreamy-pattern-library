import React, { Component } from 'react';

import 'styles/collapse.css'

class Panel extends  Component{

  state = {
    active: (this.props.active !== undefined)? this.props.active:false
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      active: nextProps.active
    })
  }

  handleClick = ()=>{

    this.setState({
      active: !this.state.active
    })
    this.props.handleClick(this.props.id)
  }

  render(){
    return(
      <div className={"collapse__item " + (this.state.active?"collapse__item-active":"")}>
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
