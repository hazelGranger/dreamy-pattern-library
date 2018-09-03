import React, { Component } from 'react';

import Page from 'components/Page';
import Card from 'components/Card';
import Row from 'components/Row';
import Col from 'components/Col';
import Collapse from 'components/Collapse';
import Panel from 'components/Panel';

class CollapsePage extends  Component{
  render(){
    return(
      <Page title="Collapse">
        <Row>
          <Col span={6}>
            <h3>Default Collapse</h3>
              <Collapse activeKey={2}>
                <Panel title="panel A" key={1}>1</Panel>
                <Panel title="panel B" key={2}>2</Panel>
                <Panel title="panel C" key={3}>3</Panel>
              </Collapse>
          </Col>
          <Col span={6}>
            <h3>Accordion Collapse</h3>
              <Collapse type="accordion" activeKey={2}>
                <Panel title="panel A" id={1}>1</Panel>
                <Panel title="panel B" id={2}>2</Panel>
                <Panel title="panel C" id={3}>3</Panel>
              </Collapse>
          </Col>
        </Row>
      </Page>
    )
  }
}

export default CollapsePage;
