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
            <Card className={this.props.className} title="Card Title">
              <article>
                <p>This is a Card</p>
              </article>
            </Card>
          </Col>
          <Col span={8}>
            <Card className={this.props.className} title="Card Title">
              <article>
                <p>This is another Card</p>
              </article>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}

export default CardPage;
