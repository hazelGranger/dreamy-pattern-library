import React, { Component } from 'react';

import Page from 'components/Page';
import Card from 'components/Card';
import Row from 'components/Row';
import Col from 'components/Col';
import Icon from 'components/Icon';
import Table from 'components/Table';

class TablePage extends Component {
  render(){
    const columns = [
      {
        title: "Name",
        dataIndex: "name"
      },
      {
        title: "Email",
        dataIndex: "email"
      },
      {
        title: "Info",
        dataIndex: "info"
      }
    ];
    const dataSource = [
      {
        key: '1',
        name: "Jack",
        email: "jackblue@gmail.com",
        info: "a pet keeper"
      },
      {
        key: '2',
        name: "Rose",
        email: "rosered@gmail.com",
        info: "a flower nursery woker"
      },
      {
        key: '3',
        name: "Bob",
        email: "bodbrown@gmail.com",
        info: "a guy don't do anything"
      }
    ]
    return(
      <Page title="Table">
        <Row>
          <Col span={6}>
            <Card title="Stripped Table">
              <Table type="strip"  columns={columns} dataSource={dataSource}/>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Hovered Table">
              <Table type="hover"  columns={columns} dataSource={dataSource}/>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Bordered Table">
              <Table type="border"  columns={columns} dataSource={dataSource}/>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}

export default TablePage;
