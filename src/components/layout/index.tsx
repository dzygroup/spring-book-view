import { Layout } from 'antd';
import React, { PureComponent } from 'react';
import styles from './style/index.less';
import { HeaderContent, Navigator, SearchLogin } from '@/components/layout/layout';
import { BaseProps, BaseState } from '@/components/_util/types';

const { Header, Content, Sider, Footer } = Layout;




export default class BasicLayout extends PureComponent<BaseProps, BaseState> {
  constructor(props: BaseProps) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <Header className={styles.header}>
          <HeaderContent>
            <SearchLogin/>
            <Navigator/>
          </HeaderContent>
        </Header>
        <Content className={styles.content}>{this.props.children}</Content>
        <Footer className={styles.footer}>Footer</Footer>
      </Layout>
    );
  }
}
