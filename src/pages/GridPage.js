import React, { Component } from 'react';

import Row from 'components/Row';
import Col from 'components/Col'

class GridPage extends Component{
  render(){
      let grid_12 = [],
          gridFlex = [],
          gridResponsive = [];

      for (var i = 1; i <= 12; i++) {
        grid_12.push(
          <Row type="flex" align="middle" justify="start" key={i} className="row-display">
              <Col span={i} className="col-display">col-{i}</Col>
          </Row>
        );
      }

      for (var i = 1; i <= 4; i++) {
        gridFlex.push(
          <Col span={2} className="col-display col-display-flex" key={i}>col-2</Col>
        )
      }

      for (var i = 1; i <= 4; i++) {
        gridResponsive.push(
          <Col xl={2} lg={3} md={4} sm={6} xs={12} className="col-display col-display-flex" key={i}>
            <p>col-xl-2 <br/>col-lg-3 <br/> col-md-4 <br/> col-sm-6 <br/> col-xs-12</p>
          </Col>
        )
      }


    return(
      <div className="page">
        <h2 className="page__title">Grid</h2>
        <h3 className="page__subtitle">Based on 12 columns grid</h3>
        { grid_12 }

        <h3 className="page__subtitle">Based on Flex layout</h3>
        <p className="page__paragraphs">Flex start</p>
        <Row type="flex" align="middle" justify="start" className="row-display">
          { gridFlex }
        </Row>
        <p className="page__paragraphs">Flex end</p>
        <Row type="flex" align="middle" justify="end" className="row-display">
          { gridFlex }
        </Row>
        <p className="page__paragraphs">Space between</p>
        <Row type="flex" align="middle" justify="space-between" className="row-display">
          { gridFlex }
        </Row>
        <p className="page__paragraphs">Space around</p>
        <Row type="flex" align="middle" justify="space-around" className="row-display">
          { gridFlex }
        </Row>

        <h3 className="page__subtitle">Responsive Grid</h3>
        <Row type="flex" align="middle" justify="start" className="row-display">
          { gridResponsive }
        </Row>
      </div>
    );
  }
}

export default GridPage;
