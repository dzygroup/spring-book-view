import React, { PureComponent } from 'react';
import { BaseState, ComposeProps } from '@/components/_util/types';
import { ModalProps } from 'antd/lib/modal';
import { Button, Form, Input, Modal } from 'antd';
import styles from '@/components/layout/style/layout.less';
import { ButtonProps } from 'antd/lib/button';


interface LoginButtonProps extends ComposeProps {
  button: ButtonProps;
  modal: ModalProps;
}

export default class LoginButton extends PureComponent<LoginButtonProps, BaseState> {

  constructor(props: LoginButtonProps) {
    super(props);
  }

  render() {
    return <>
      <Button {...this.props.button}>{this.props.button.children}</Button>
      <LogInModal {...this.props.modal}/>
    </>;
  }
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

