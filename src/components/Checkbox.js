import React, { Component } from 'react';

class Checkbox extends Component{
  render(){
    const {className, name, id, type,text,checked} = this.props;
    let classNames = "input-checkbox " + className;
    if (type) {
      classNames += " input-checkbox-"+type
    }
    return(
      <span className="input-checkbox-container">
        <input type="checkbox" name={name} id={id} className={classNames} defaultChecked={checked} />
        <label htmlFor={id}>{text}</label>
      </span>
    )
  }
}

export default Checkbox;
