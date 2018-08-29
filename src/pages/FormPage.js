import React, { Component } from 'react';

import Page from 'components/Page';
import Card from 'components/Card';
import Row from 'components/Row';
import Col from 'components/Col';
import Icon from 'components/Icon';

import Input from 'components/Input';
import TextArea from 'components/TextArea';
import Radio from 'components/Radio';
import Checkbox from 'components/Checkbox';

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
                <Input className="input-display" size="default" placeholder="type your name" />
                <p>Large size with default value</p>
                <Input className="input-display" size="lg" placeholder="type your city" defaultValue="Wellington" />
                <p>small size with default value</p>
                <Input className="input-display" size="sm" placeholder="type your name" />
              </Card>
              <Card title="Other Types" type="inner">
                <p>Input number</p>
                <Input className="input-display" type="number" placeholder="type a number" />
                <p>Input Email</p>
                <Input className="input-display" type="email" emailreminder={emailreminder} placeholder="input an Email address" />
                <p>Input Search</p>
                <Input className="input-display" type="search" placeholder="input search text" />
              </Card>

              {/* <TextArea /> */}
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Radio">
                <p>Radios Horizonal display</p>
                <div className="input-radio-group input-radio-group-horizonal">
                  <Radio text="A" name="Q1" id="a" />
                  <Radio text="B" name="Q1" id="b" checked={true} />
                  <Radio text="C" name="Q1" id="c" />
                  <Radio text="D" name="Q1" id="d" />
                </div>
                <p>Radios Vertical display</p>
                <div className="input-radio-group input-radio-group-vertical">
                  <Radio text="I like it a lot!" name="Q2" id="a1" type="primary" checked={true} />
                  <Radio text="I like it a little!" name="Q2" id="b1" type="primary" />
                  <Radio text="I have no feeling for it!" name="Q2" id="c1" type="primary" />
                  <Radio text="I dislike it!" name="Q2" id="d1" type="primary" />
                </div>
            </Card>
            <Card title="Checkbox">
              <p>Checkboxes Horizonal display</p>
              <div className="input-checkbox-group input-checkbox-group-horizonal">
                <Checkbox text="A" id="a2" name="Q3" />
                <Checkbox text="B" id="b2" name="Q3" />
                <Checkbox text="C" id="c2" name="Q3"  checked={true}/>
                <Checkbox text="D" id="d2" name="Q3" />
              </div>
              <p>Checkboxes Vertical display</p>
              <div className="input-checkbox-group input-checkbox-group-vertical">
                <Checkbox text="Apple juice" id="a3" name="Q4" type="primary" />
                <Checkbox text="Bear glasses" id="b3" name="Q4" type="success"  checked={true}/>
                <Checkbox text="Candy can" id="c3" name="Q4" type="warning" />
                <Checkbox text="Donut boxes" id="d3" name="Q4" type="danger" />
                <Checkbox text="Eggnog" id="e3" name="Q4" type="info" checked={true} />
              </div>
            </Card>
          </Col>
          <Col span={6}>

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
