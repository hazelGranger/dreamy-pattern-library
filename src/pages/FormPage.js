import React, { Component } from 'react';

import Page from 'components/Page';
import Card from 'components/Card';
import Row from 'components/Row';
import Col from 'components/Col';
import Icon from 'components/Icon';

import Input from 'components/Input';
import TextArea from 'components/TextArea';

class FormPage extends Component{
  render(){
    const emailreminder = ['gmail.com','qq.com','163.com','yahoo.com'];
    return(
      <Page title="Form Elements">
        <Row type="flex">
          <Col span={6}>
            <Card title="Input">
              <Card title="Input text" type="inner">
                <p>Default size with placeholder</p>
                <Input size="default" placeholder="type your name" />
                <p>Large size with default value</p>
                <Input size="lg" placeholder="type your city" defaultValue="Wellington" />
                <p>small size with default value</p>
                <Input size="sm" placeholder="type your name" />
              </Card>
              <Card title="Other Types" type="inner">
                <p>Input number</p>
                <Input type="number" placeholder="type a number" />
                <p>Input Email</p>
                <Input type="email" emailreminder={emailreminder} placeholder="input an Email address" />
                <p>Input Search</p>
                <Input type="search" placeholder="input search text" />
                <Input type="search" size="lg" placeholder="input search text" />
              </Card>

              {/* <TextArea /> */}
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
