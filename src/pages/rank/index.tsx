import React from 'react';
import './index.less';
import styles from './index.less';
import { Carousel, Col, Row, List, Image } from 'antd';
import classNames from 'classnames';


export default (props: any, context: any) => {
  const data = [
    { link: 'https://www.baidu.com', title: 'title', description: 'desc', image: 'image' },
    { link: 'https://www.baidu.com', title: 'title', description: 'desc', image: 'image' },
    { link: 'https://www.baidu.com', title: 'title', description: 'desc', image: 'image' },
    { link: 'https://www.baidu.com', title: 'title', description: 'desc', image: 'image' },
    { link: 'https://www.baidu.com', title: 'title', description: 'desc', image: 'image' },
    { link: 'https://www.baidu.com', title: 'title', description: 'desc', image: 'image' },
    { link: 'https://www.baidu.com', title: 'title', description: 'desc', image: 'image' },
    { link: 'https://www.baidu.com', title: 'title', description: 'desc', image: 'image' },
    { link: 'https://www.baidu.com', title: 'title', description: 'desc', image: 'image' },
    { link: 'https://www.baidu.com', title: 'title', description: 'desc', image: 'image' },
  ];
  return (
    <>
      <Row className={styles.row}>
        <Col span={4} className={classNames(styles.fans)}>
          <List dataSource={data} size={'small'}
                renderItem={(item, index) => {
                  return <li className={styles.bookItem}>{item.title}</li>;
                }}/>
        </Col>
        <Col span={16}>
          <Carousel autoplay
                    autoplaySpeed={5000}
                    className={classNames(styles.carousel)}>
            <Image src={require('../assets/1.jpg')} width={750}/>
            <Image src={require('../assets/1.jpg')}/>
            <Image src={require('../assets/1.jpg')}/>
            <Image src={require('../assets/1.jpg')}/>
          </Carousel>
        </Col>
        <Col span={4}>
          <List dataSource={data} size={'small'}
                renderItem={(item, index) => {
                  return <li className={styles.bookItem}>{item.title}</li>;
                }}/>
        </Col>
      </Row>
      {/*推荐*/}
      <Row className={styles.otherRow}>
        <Col span={4}>
          <List dataSource={data} size={'small'} renderItem={(item, index) => {
            return <li className={styles.bookItem}>{item.title}</li>;
          }}/>
        </Col>
        <Col span={16}>

        </Col>
        <Col span={4}></Col>
      </Row>
      {/*广告*/}
      <Row className={styles.otherRow}>
        <Col span={24}>
          <Image src={require('../assets/banner/1.jpg')}/>
        </Col>
      </Row>
      {/*分类榜单推荐*/}
      <Row className={styles.otherRow}>
        <Col span={4}>
          <List dataSource={data} size={'small'} header={'新书推荐榜'}
                renderItem={(item, index) => {
                  return <li className={styles.bookItem}>{item.title}</li>;
                }}/>
        </Col>
        <Col span={4}>
          <List dataSource={data} size={'small'} header={'新书人气榜'}
                renderItem={(item, index) => {
                  return <li className={styles.bookItem}>{item.title}</li>;
                }}/>
        </Col>
        <Col span={4}>
          <List dataSource={data} size={'small'} header={'粮草人气榜'}
                renderItem={(item, index) => {
                  return <li className={styles.bookItem}>{item.title}</li>;
                }}/>
        </Col>
        <Col span={4}>
          <List dataSource={data} size={'small'} header={'粮草评分榜'}
                renderItem={(item, index) => {
                  return <li className={styles.bookItem}>{item.title}</li>;
                }}/>
        </Col>
        <Col span={4}>
          <List dataSource={data} size={'small'} header={'小众精品榜'}
                renderItem={(item, index) => {
                  return <li className={styles.bookItem}>{item.title}</li>;
                }}/>
        </Col>
        <Col span={4}>
          <List dataSource={data} size={'small'} header={'小众精品榜'}
                renderItem={(item, index) => {
                  return <li className={styles.bookItem}>{item.title}</li>;
                }}/>
        </Col>
      </Row>
    </>
  );
}
