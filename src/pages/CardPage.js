import React, { Component } from 'react';

import Page from 'components/Page';
import Row from 'components/Row';
import Col from 'components/Col';
import Card from 'components/Card';

class CardPage extends Component {
  render(){
    return(
      <Page title="Card">
        <Row className="row-with-gap-col">
          <Col span={4}>
            <Card title="Card Title">
              <article>
                <p>This is a Card</p>
                <p>Just very concise</p>
                <p>You can add other elements in!</p>
              </article>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Card Title">
              <article>
                <p>This is another Card</p>
                <p>Just very concise</p>
                <p>You can add other elements in!</p>
              </article>
            </Card>
          </Col>
        </Row>
        <Row className="row-with-gap-col">
          <Col span={4}>
            <Card title="Card Title">
              <Card type="inner" title="Inner Card Title">
                <article>
                  <p>This is a Card</p>
                  <p>Just very concise</p>
                  <p>You can add other elements in!</p>
                </article>
              </Card>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Card Title">
              <Card type="inner" title="Inner Card Title">
                <article>
                  <p>This is a Card</p>
                </article>
              </Card>
              <Card type="inner" title="Inner Card Title">
                <article>
                  <p>Just very concise</p>
                  <p>You can add other elements in!</p>
                </article>
              </Card>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}

export default CardPage;
