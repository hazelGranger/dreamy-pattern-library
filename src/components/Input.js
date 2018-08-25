import React, {Component} from 'react';

import TextArea from 'components/TextArea';
import Button from 'components/Button';
import Icon from 'components/Icon';

import 'styles/form.css';


class Input extends Component{

  render(){
    const {type="text" ,placeholder,defaultValue,size} = this.props;
    let classNames = "input";

    if ( size &&( size==="lg" || size=="sm")) {
      classNames += " input-" + size;
    }

    if (type==="search") {
      return(
        <span className="input-search-container">
          <input className={classNames} type="text" placeholder={placeholder} defaultValue={defaultValue} />
          <Button className="input-search-button" text={<Icon type="search1" />} />
        </span>
      );
    }else{
      return(
        <input className={classNames} type={type} placeholder={placeholder} defaultValue={defaultValue} />
      );
    }
  }
}

export default Input;
