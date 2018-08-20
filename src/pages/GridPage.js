import React, { Component } from 'react';

import Row from 'components/Row';
import Col from 'components/Col'

class GridPage extends Component{
  render(){
      let grid_12 = [];
      for (var i = 1; i <= 12; i++) {
        grid_12.push(
          <Row type="flex" align="middle" justify="start" key={i} className="row-display">
              <Col span={i} className="col-display">col-{i}</Col>
          </Row>
        );
      }
      let gridFlex = [];
      for (var i = 1; i <= 4; i++) {
        gridFlex.push(
          <Col span={2} className="col-display col-display-flex" key={i}>col-2</Col>
        )
      }
    return(
      <div className="page">
        <h2 className="page__title">Grid</h2>
        <p className="page__descr">Based on 12 columns grid</p>
        { grid_12 }
        <p className="page__descr">Based on Flex layout</p>
        <Row type="flex" align="" justify="start" className="row-display">
          { gridFlex }
        </Row>
        <Row type="flex" align="" justify="end" className="row-display">
          { gridFlex }
        </Row>
        <Row type="flex" align="" justify="space-between" className="row-display">
          { gridFlex }
        </Row>
        <Row type="flex" align="" justify="space-around" className="row-display">
          { gridFlex }
        </Row>
      </div>
    );
  }
}

export default GridPage;
