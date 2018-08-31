import React, { Component } from 'react';

import Button from 'components/Button';
import Dropdown from 'components/Dropdown';
import Icon from 'components/Icon';

class Select extends Component{
  state = {
    visibility: false,
    selected: this.props.text
  }

  handleClick = () =>{
    this.setState({
      visibility: !this.state.visibility
    })
  }

  handleSelect = (selected) => {
    this.setState({
      selected: selected
    });
  }
  render(){
    let classNames = "input-select-container "+this.props.className;
    return(
      <span style={{width: this.props.width+'px'}} className={classNames} onClick={this.handleClick}>
        <Button text={this.state.selected} theme={this.props.theme}  />
        <Dropdown items={this.props.items} visibility={this.state.visibility} handleSelect={this.handleSelect} />
        <Icon type="caretdown" />
      </span>
    );
  }
}

export default Select;
