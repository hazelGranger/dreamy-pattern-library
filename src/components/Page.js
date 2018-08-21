import React, { Component } from 'react';

class Page extends Component {
  render(){
    return(
      <div className="page">
        <h2 className="page__title">{ this.props.title }</h2>
        { this.props.children }
      </div>
    );
  }
}

export default Page;
