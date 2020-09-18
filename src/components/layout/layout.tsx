import { Button, Col, Form, Input, Layout, Menu, Modal, Row } from 'antd';
import React, { PureComponent } from 'react';
import { SettingOutlined } from '@ant-design/icons';
import styles from './style/layout.less';
import { BaseProps, BaseState } from '@/components/_util/types';
import { ModalProps } from 'antd/lib/modal';
import LoginButton from '@/components/login/login';
import LogupButton from '@/components/login/logup';

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

export class SearchLogin extends PureComponent<BaseProps, SearchLoginState> {

  constructor(props: BaseProps) {
    super(props);
  }

  updateState = (nextState: SearchLoginState) => {
    this.setState({ ...this.state, ...nextState });
  };

  logIn = () => {
    this.setState({ ...this.state, visible: 'login' });
  };

  logUp = () => {
    this.setState({ ...this.state, visible: 'logup' });
  };

  render() {
    return (<>
      <Row>
        <Col span={8}> 23</Col>
        <Col span={8}>
          <Input.Search/>
        </Col>
        <Col span={8} className={styles.right}>
          <LoginButton
            button={{ onClick: this.logIn, children: '登录' }}
            modal={{
              visible: this.state?.visible === 'login',
              onOk: () => {
                this.updateState({ visible: 'none' });
              },
              onCancel: () => this.updateState({ visible: 'none' }),
            }}/>
          <LogupButton
            button={{ onClick: this.logUp, children: '注册' }}
            modal={{
              visible: this.state?.visible === 'logup',
              onOk: () => {
                this.updateState({ visible: 'none' });
              },
              onCancel: () => this.updateState({ visible: 'none' }),
            }}/>
          <Button className={styles.contribute} onClick={contribute}>投稿</Button>
        </Col>
      </Row>
    </>);
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


interface SearchLoginState extends BaseState {
  visible?: 'login' | 'logup' | 'none';
}

const LogInModal = (props: ModalProps, context: any) => {
  return <Modal {...props}>
    <Form className={styles.form}>
      <Form.Item label={'用户名'}>
        <Input/>
      </Form.Item>
      <Form.Item label={'密码'}>
        <Input type={'password'}/>
      </Form.Item>
      <Form.Item>
        <a>忘记密码？</a>
      </Form.Item>
    </Form>
  </Modal>;
};
const LogUpModal = (props: ModalProps, context: any) => {
  return <Modal {...props}>
    <Form className={styles.form}>
      <Form.Item label={<span>用户名</span>}>
        <Input/>
      </Form.Item>
      <Form.Item label={<span>密码</span>}>
        <Input type={'password'}/>
      </Form.Item>
      <Form.Item label={<span>确认密码</span>}>
        <Input type={'password'}/>
      </Form.Item>
      <Form.Item label={<span>邮箱</span>}>
        <Input type={'email'}/>
      </Form.Item>
    </Form>
  </Modal>;
};


const contribute = () => {
};
