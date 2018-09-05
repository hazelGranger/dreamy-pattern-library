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
              <Collapse activeId={[1,3]}>
                <Panel title="panel A" id={1}>AAA</Panel>
                <Panel title="panel B" id={2}>BBB</Panel>
                <Panel title="panel C" id={3}>CCC</Panel>
              </Collapse>
          </Col>
          <Col span={6}>
            <h3>Accordion Collapse</h3>
              <Collapse type="accordion" activeId={[2]}>
                <Panel title="panel 1" id={1}>1111</Panel>
                <Panel title="panel 2" id={2}>22222</Panel>
                <Panel title="panel 3" id={3}>33333</Panel>
              </Collapse>
          </Col>
        </Row>
      </Page>
    )
  }
}

export default CollapsePage;
