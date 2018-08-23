import React, { Component } from 'react';

import Page from 'components/Page';
import Card from 'components/Card';
import Row from 'components/Row';
import Col from 'components/Col';
import Icon from 'components/Icon';

import Input from 'components/Input';

class FormPage extends Component{
  render(){
    return(
      <Page title="Form Elements">
        <Row type="flex">
          <Col span={6}>
            <Card title="Input">
              <Input />
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Radio">

            </Card>
          </Col>
          <Col span={6}>
            <Card title="Checkbox">

            </Card>
          </Col>
          <Col span={6}>
            <Card title="Select">

            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}

export default FormPage;
