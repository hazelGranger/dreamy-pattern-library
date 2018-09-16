import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigator from 'components/Navigator';

import ButtonPage from 'pages/ButtonPage';
import GridPage from 'pages/GridPage';
import CardPage from 'pages/CardPage';
import IconPage from 'pages/IconPage';
import FormPage from 'pages/FormPage';
import CollapsePage from 'pages/CollapsePage';
import TabPage from 'pages/TabPage';
import TablePage from 'pages/TablePage';

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
          <Route path="/tabs" component={TabPage} />
          <Route path="/table" component={TablePage} />
        </main>
      </Router>
    );
  }
}

export default Main;
