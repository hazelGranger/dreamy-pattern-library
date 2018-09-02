import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigator from 'components/Navigator';

import ButtonPage from 'pages/ButtonPage';
import GridPage from 'pages/GridPage';
import CardPage from 'pages/CardPage';
import IconPage from 'pages/IconPage';
import FormPage from 'pages/FormPage';
import CollapsePage from 'pages/CollapsePage';

class Main extends Component {
  render() {
    return(
      <Router>
        <main className="main--layout-horizonal">
          <Navigator />
          <Route path="/button" component={ButtonPage} />
          <Route path="/grid" component={GridPage} />
          <Route path="/card" component={CardPage} />
          <Route path="/icon" component={IconPage} />
          <Route path="/form" component={FormPage} />
          <Route path="/collapse" component={CollapsePage} />
        </main>
      </Router>
    );
  }
}

export default Main;
