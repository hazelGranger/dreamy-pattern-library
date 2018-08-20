import React, { Component } from 'react';

class Row extends Component{
  render(){
    const {type, align, justify} = this.props;
    let classNames = "row",
        alignClassname = " row-flex-align-",
        justifyClassname = " row-flex-";
    if (type === "flex") {
      classNames = "row-flex"
      if (align) {
        classNames += alignClassname + align;
      }
      if (justify) {
        classNames += justifyClassname + justify;
      }
    }

    return(
      <div className={classNames + " " + this.props.className}>
        { this.props.children }
      </div>
    );
  }
}

export default Row;
