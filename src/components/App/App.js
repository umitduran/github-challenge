import React from 'react';
import Login from 'components/Login';
import Counter from 'components/Counter';
import Random from 'components/Random';
import {Col, Layout, Row} from 'antd';
import 'antd/dist/antd.css';
import classes from './App.module.css';

const {Header} = Layout;

const App = () => (
  <Row className={classes.row}>
    <Col span={12} offset={6}>
      <Header className={classes.header}>
        Welcome to Umit Github Challenge
      </Header>
    </Col>
    <Col span={12} offset={6}>
      <Login />
    </Col>
  </Row>
);

export default App;
