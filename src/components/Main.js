import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigator from 'components/Navigator'

import Buttons from 'pages/Buttons'
import GridPage from 'pages/GridPage'

class Main extends Component {
  render() {
    return(
      <Router>
        <main className="main--layout-horizonal">
          <Navigator />
          <Route path="/button" component={Buttons} />
          <Route path="/grid" component={GridPage} />
        </main>
      </Router>
    );
  }
}

export default Main;
