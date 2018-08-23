import React, { Component } from 'react';

import 'styles/iconfont.css';
import 'styles/iconfonts/iconfont.ttf';
import 'styles/iconfonts/iconfont.eot';
import 'styles/iconfonts/iconfont.svg';
import 'styles/iconfonts/iconfont.woff';

class Icon extends Component{
  render(){
    const {type,style,className} = this.props;
    let classNames = "icon" + " icon-" + type + " " + (className?className:"");
    return(
      <i className={classNames}></i>
    );
  }
}

export default Icon;
