import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import 'styles/navigator.css';

class Navigator extends Component {
  render(){
    return(
      <nav className="nav">
        <ul>
          <li className="nav__item">
            <Link to="/grid">Layout</Link>
            <ul className="subnav">
              <li className="subnav__item">
                <Link to="/grid">Grid</Link>
              </li>
            </ul>
          </li>
          <li className="nav__item">
            <Link to="/button">Elements</Link>
            <ul className="subnav">
              <li className="subnav__item">
                <Link to="/button">Button</Link>
              </li>
              <li className="subnav__item">
                <Link to="/button">Icon</Link>
              </li>
            </ul>
          </li>
          <li className="nav__item">
            <Link to="/button">Data Entry</Link>
            <ul className="subnav">
              <li className="subnav__item">
                <Link to="/button">Form</Link>
              </li>
              <li className="subnav__item">
                <Link to="/button">Input</Link>
              </li>
              <li className="subnav__item">
                <Link to="/button">Radio</Link>
              </li>
              <li className="subnav__item">
                <Link to="/button">Checkbox</Link>
              </li>
              <li className="subnav__item">
                <Link to="/button">Select</Link>
              </li>
              <li className="subnav__item">
                <Link to="/button">Switch</Link>
              </li>
            </ul>
          </li>
          <li className="nav__item">
            <Link to="/button">Data Display</Link>
            <ul className="subnav">
              <li className="subnav__item">
                <Link to="/button">Card</Link>
              </li>
              <li className="subnav__item">
                <Link to="/button">Collapse</Link>
              </li>
              <li className="subnav__item">
                <Link to="/button">Tabs</Link>
              </li>
              <li className="subnav__item">
                <Link to="/button">Table</Link>
              </li>
              <li className="subnav__item">
                <Link to="/button">Tooltip</Link>
              </li>
            </ul>
          </li>
          <li className="nav__item">
            <Link to="/button">Navigation</Link>
            <ul>
              <li className="subnav__item">
                <Link to="/button">Dropdown</Link>
              </li>
              <li className="subnav__item">
                <Link to="/button">Pagenation</Link>
              </li>
              <li className="subnav__item">
                <Link to="/button">Steps</Link>
              </li>
            </ul>
          </li>
          <li className="nav__item">
            <Link to="/button">Feedback</Link>
            <ul>
              <li className="subnav__item">
                <Link to="/button">Message</Link>
              </li>
              <li className="subnav__item">
                <Link to="/button">Modal</Link>
              </li>
              <li className="subnav__item">
                <Link to="/button">Progress</Link>
              </li>
              <li className="subnav__item">
                <Link to="/button">Spin</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigator;