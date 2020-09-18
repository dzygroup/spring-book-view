import React, { PureComponent } from 'react';
import { BaseState, ComposeProps } from '@/components/_util/types';
import { ModalProps } from 'antd/lib/modal';
import { Button, Form, Input, Modal } from 'antd';
import styles from '@/components/layout/style/layout.less';
import { ButtonProps } from 'antd/lib/button';


interface LogupButtonProps extends ComposeProps {
  button: ButtonProps;
  modal: ModalProps;
}

export default class LogupButton extends PureComponent<LogupButtonProps, BaseState> {

  constructor(props: LogupButtonProps) {
    super(props);
  }

  render() {
    return <>
      <LogUpModal {...this.props.modal}/>
      <Button {...this.props.button}>{this.props.button.children}</Button>
    </>;
  }

}

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

