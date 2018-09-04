import React, { Component } from 'react';

import Page from 'components/Page';
import Card from 'components/Card';
import Row from 'components/Row';
import Col from 'components/Col';
import Tab from 'components/Tab';
import TabItem from 'components/TabItem';

class CollapsePage extends  Component{
  render(){
    return(
      <Page title="Tabs">
        <Row>
          <Col span={6}>
            <h3>Tabs outside the card</h3>
            <Tab defaultActiveKey={2}>
              <TabItem title="Tab 1" id={1}>AAA</TabItem>
              <TabItem title="Tab 2" id={2}>BBB</TabItem>
              <TabItem title="Tab 3" id={3}>CCC</TabItem>
            </Tab>
          </Col>
          <Col span={6}>
            <Card title="Tabs inside the card">
              <Tab defaultActiveKey={2}>
                <TabItem title="Tab 1" id={1}>AAA</TabItem>
                <TabItem title="Tab 2" id={2}>BBB</TabItem>
                <TabItem title="Tab 3" id={3}>CCC</TabItem>
              </Tab>
            </Card>
          </Col>
        </Row>
      </Page>
    )
  }
}

export default CollapsePage;
