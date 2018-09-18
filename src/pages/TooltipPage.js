import React, {Component} from 'react';

import Page from 'components/Page';
import Card from 'components/Card';
import Row from 'components/Row';
import Col from 'components/Col';
import Tooltip from 'components/Tooltip';
import Button from 'components/Button';

class TooltipPage extends Component {
  render(){
    const divStyle = {
      display: 'flex',
      justifyContent: 'space-around'
    }
    return(
      <Page title="Tooltip">
        <Row>
          <Col span={12}>
            <Card title="Tooltips above">
              <div style={divStyle}>
                <Tooltip type="topleft" text="top-left tooltip">
                  <Button text="top-left" theme="default" />
                </Tooltip>
                <Tooltip type="top" text="top tooltip">
                  <Button text="top" theme="default" />
                </Tooltip>
                <Tooltip type="topright" text="top-right tooltip">
                  <Button text="top-right" theme="default" />
                </Tooltip>
              </div>
            </Card>
            <Card title="Tooltips under">
              <div style={divStyle}>
                <Tooltip type="bottomleft" text="bottom-left tooltip">
                  <Button text="bottom-left" theme="default" />
                </Tooltip>
                <Tooltip type="bottom" text="bottom tooltip">
                  <Button text="bottom" theme="default" />
                </Tooltip>
                <Tooltip type="bottomright" text="bottom-right tooltip">
                  <Button text="bottom-right" theme="default" />
                </Tooltip>
              </div>
            </Card>
            <Card title="Tooltips left and right">
              <div style={divStyle}>
                <Tooltip type="left" text="left tooltip">
                  <Button text="left" theme="default" />
                </Tooltip>
                <Tooltip type="right" text="right tooltip">
                  <Button text="right" theme="default" />
                </Tooltip>
              </div>
            </Card>
          </Col>
        </Row>
      </Page>

    );
  }
}

export default TooltipPage;
