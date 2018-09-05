import React, { Component } from 'react';

import Panel from 'components/Panel'

import 'styles/collapse.css'

class Collapse extends  Component{
  state = {
    activeId: (this.props.activeId!==undefined)?this.generateActiveId(this.props.activeId):[]
  }

  generateActiveId(propsId){
    if (this.props.type==="accordion") {
      if (Array.isArray(propsId)) {
        return propsId.slice(-1);
      }else{
        return [propsId];
      }
    }else{
      return propsId;
    }
  }

  handleClick(id) {
    if (this.props.type!=="accordion") {
      return
    }
    
    this.setState({
      activeId: this.generateActiveId(id)
    })
  }

  renderPanel() {
    let children = this.props.children,
        panelItmes = [];
    for (var i = 0; i < children.length; i++) {
      // console.log(this.state.activeId,children[i]);
      // console.log(this.state.activeId,this.state.activeId.indexOf(children[i].props.id));
      panelItmes.push(
        <Panel key={i} handleClick={this.handleClick.bind(this)} accordion={this.props.type==="accordion"?true:false}  title={children[i].props.title} id={children[i].props.id}
          active={this.state.activeId.indexOf(children[i].props.id)>-1?true:false}>
          {children[i].props.children}</Panel>
      )}

    return panelItmes;
  }

  render(){
    const {type, children} = this.props;
    return(
      <div className="collapse" >
        {this.renderPanel()}
      </div>
    )
  }
}

export default Collapse;
