import React from 'react';
import './index.less';
import styles from './index.less';
import { Avatar, Carousel, Col, Image, Row } from 'antd';
import classNames from 'classnames';
import LinkImage from '@/components/image/linkImage';
import List from '@/components/list/list';
import { Link } from 'umi';
import Go from '@/components/link/go';
import Cover from '@/components/image/cover';


export default (props: any, state: any) => {
  const data = [
    { link: 'https://www.baidu.com', title: 'title', description: 'desc', image: 'image' },
  ];
  return (
    <Row className={styles.row}>
      <Col span={4} className={classNames(styles.fans)}>
        <List header={<h3>Header</h3>}
              dataSource={data}
          // renderItem={(item, index) => (item.title)}
              meta={(item, index) => {
                return {
                  avatar: <Avatar src={require('../assets/2.jpg')}/>,
                  title: 'fkdjfkdj',
                };
              }}/>
      </Col>
      <Col span={16}>
        <Carousel autoplay
                  autoplaySpeed={5000}
                  className={classNames(styles.carousel)}>
          <LinkImage link={'http://www.baidu.com/'}
                     src={require('../assets/1.jpeg')}
                     preview={false}/>
          <LinkImage link={'http://www.baidu.com/'}
                     src={require('../assets/2.jpg')}
                     preview={false}/>
          <LinkImage link={'http://www.baidu.com/'}
                     src={require('../assets/3.jpg')}
                     preview={false}/>
        </Carousel>
      </Col>
      <Col span={4}>
        <Cover  src={require('../assets/1.jpeg')} style={{ width: '10px', height: '10px' }}/>
        <Image src={require('../assets/1.jpeg')} style={{ width: 10, height: 10 }} />
      </Col>
    </Row>
  );
}
