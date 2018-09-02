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
              <Collapse>
                <Panel title="panel A">1</Panel>
                <Panel title="panel B">2</Panel>
                <Panel title="panel C">3</Panel>
              </Collapse>
          </Col>
          <Col span={6}>
            <Card title="Accordion Collapse"></Card>
          </Col>
        </Row>
      </Page>
    )
  }
}

export default CollapsePage;
