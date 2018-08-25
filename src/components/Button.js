import React, { Component } from 'react';

import 'styles/button.css';

class Button extends Component{
  render(){
    const {type,size,theme,text,link,className} = this.props;
    let classNames = "btn";

    if (!size || (size!=="large" && size!=="small") ) {
      classNames += " btn-medium";
    }else{
      classNames += " btn-" + size;
    }

    if (!theme) {
      classNames += " btn-default";
    }else {
      classNames += " btn-"+theme;
    }

    if (type==="link") {
      return(
        <a href={link.href?link.href:null} target={link.target?link.href:null} className={classNames}>{ text?text:"" }</a>
      );
    }else{
      return(
        <button className={classNames + " " + className}>{ text?text:"" }</button>
      );
    }
  }
}

export default Button;
