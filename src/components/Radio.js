import React, { Component } from 'react';

class Radio extends Component {
  render(){
    const {id, type, text, name,checked} = this.props;
    let classNames = "input-radio";
    if(type==="primary"){
      classNames += " input-radio-primary"
    }
    return(
      <span className="input-radio-container">
        <input name={name} className={classNames}  type="radio" id={id} defaultChecked={checked} />
        <label htmlFor={id}>{text}</label>
      </span>
    )
  }
}

export default Radio;
