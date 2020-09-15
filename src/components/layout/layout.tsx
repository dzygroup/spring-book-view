import { Button, Col, Input, Layout, Menu, Row } from 'antd';
import React, { PureComponent } from 'react';
import { SettingOutlined } from '@ant-design/icons';
import styles from './style/layout.less';
import { BaseProps, BaseState } from '@/components/_util/types';

const { Header, Content, Sider, Footer } = Layout;
const { SubMenu } = Menu;

export class HeaderContent extends PureComponent<BaseProps, BaseState> {
  constructor(props: BaseProps) {
    super(props);
  }

  render() {
    const MAX_WIDTH = 24;
    return (<div className={styles.container}>

      {/*React.Children.map(this.props.children, x => (x as any).props.foo)*/}
      {
        React.Children.map(this.props.children, x => (<Row>
          <Col span={MAX_WIDTH}>{x}</Col>
        </Row>))
      }
    </div>);
  }
}

export class SearchLogin extends PureComponent<BaseProps, BaseState> {

  constructor(props: BaseProps) {
    super(props);
  }

  render() {
    return (<Row>
      <Col span={8}> 23</Col>
      <Col span={8}>
        <Input.Search/>
      </Col>
      <Col span={8} className={styles.right}>
        <Button className={styles.loginBtn}>登录</Button>
        <Button className={styles.logonBtn}>注册</Button>
        <Button className={styles.contribute}>投稿</Button>
      </Col>
    </Row>);
  }
}

export class Navigator extends PureComponent<BaseProps, BaseState> {
  constructor(props: BaseProps) {
    super(props);
  }

  render() {
    return <div className={styles.navigator}>
      <Menu mode={'horizontal'}>
        <Menu.Item>分类</Menu.Item>
        <Menu.Item>玄幻</Menu.Item>
        <Menu.Item>奇幻</Menu.Item>
        <Menu.Item>都市</Menu.Item>
        <Menu.Item>历史</Menu.Item>
        <Menu.Item>同人</Menu.Item>
        <Menu.Item>军事</Menu.Item>
        <SubMenu icon={<SettingOutlined/>} title="奇幻">
          <Menu.ItemGroup title="现代奇幻">
            <Menu.Item key="setting:1">奇幻</Menu.Item>
            <Menu.Item key="setting:2">奇幻</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="魔法奇幻">
            <Menu.Item key="setting:3">所有</Menu.Item>
            <Menu.Item key="setting:4">魔法</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item>仙侠</Menu.Item>
        <Menu.Item>仙侠</Menu.Item>
        <Menu.Item>仙侠</Menu.Item>
      </Menu>
    </div>;
  }
}
