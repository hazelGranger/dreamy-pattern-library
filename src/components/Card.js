import React, { Component } from 'react';

class Card extends Component {
  render(){
    const {title, children, type} = this.props;
    let classNames = "card" + (type==="inner"? " card-inner":"");
    return(
      <div className={classNames}>
        <h3 className="card__title">{title}</h3>
        { children }
      </div>
    );
  }
}

export default Card;
