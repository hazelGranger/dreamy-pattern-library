import React, { Component } from 'react';

import Page from 'components/Page';
import Card from 'components/Card';
import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button'

class ButtonPage extends Component {
  composeButtons(size){
    return(
      <div className="button-display">
        <Button text="default" theme="default" size={size} />
        <Button text="success" theme="success" size={size} />
        <Button text="warning" theme="warning" size={size} />
        <Button text="danger" theme="danger" size={size} />
      </div>
    );
  }
  render() {
    let defaultSizeButtons = this.composeButtons(),
        largeButtons = this.composeButtons("large"),
        smallButtons = this.composeButtons("small");

    return (
      <Page title="Button">
        <Row>
          <Col span={6}>
            <Card title="Default-size or Medium Buttons">
              { defaultSizeButtons }
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Large Buttons">
              { largeButtons }
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Small Buttons">
              { smallButtons }
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Link Buttons">
              <div className="button-display">
                <Button type="link" link={{"href": "https:\/\/github.com\/", "target": "_blank"}} text="This is a Link Button" theme="default" />
              </div>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}

export default ButtonPage;
