import React, { Component } from 'react';

class Card extends Component {
  render(){
    const {title, children} = this.props;
    return(
      <section className="card">
        <h3 className="card__title">title</h3>
        { children }
      </section>
    );
  }
}

export default Card;
