import React, { Component } from 'react';

import 'styles/button.css'

class Buttons extends Component {
  render() {
    return (
      <div className="Buttons">
        <button className="btn btn-large btn-default">test</button>
        <button className="btn btn-medium btn-success">test</button>
        <button className="btn btn-medium btn-warning">test</button>
        <button className="btn btn-small btn-danger">test</button>
      </div>
    );
  }
}

export default Buttons;
