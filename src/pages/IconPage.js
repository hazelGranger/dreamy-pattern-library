import React, { Component } from 'react';

import Page from 'components/Page';
import Card from 'components/Card';
import Row from 'components/Row';
import Col from 'components/Col';
import Icon from 'components/Icon';
import iconfontNames from "styles/iconfonts/iconfont"

class IconPage extends Component{
  render(){

    let allIcons = [];
    for (var i = 0; i < iconfontNames.length; i++) {
      allIcons.push(
        <Col xl={2} lg={2} md={2} sm={2} xs={3} key={iconfontNames[i]}>
          <div className="icon-display">
            <Icon type={iconfontNames[i]} />
            <span className="icon-name">{iconfontNames[i]}</span>
          </div>
        </Col>
      );
    }

    return(
      <Page title="Icons">
        <Row>
          <Col span={12}>
            <Card >
              <Row type="flex" align="center" justify="flex-start">
                {allIcons}
              </Row>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}

export default IconPage;
