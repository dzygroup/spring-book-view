import React from 'react';
import styles from './index.less';
import { Carousel, Col, Row, List, Image } from 'antd';
import './index.less';
import classNames from 'classnames';
import { ImageProps } from 'rc-image';
import { BaseProps } from '@/components/_util/types';


export default (props: any, state: any) => {
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
            <Image src={require('../assets/1.jpg')} preview={false}/>
            <Image src={require('../assets/1.jpg')} preview={false}/>
            <Image src={require('../assets/1.jpg')} preview={false}/>
            <Image src={require('../assets/1.jpg')} preview={false}/>
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
          <List dataSource={data} size={'small'} header={'本周强推'}
                renderItem={(item, index) => {
                  return <li className={styles.bookItem}>{item.title}</li>;
                }}/>
        </Col>
        <Col span={16} className={'a'}>
          <h3 className={styles.imageListTitle}>标题</h3>
          <ImageList className={styles.imageList}
                     dataSource={[ 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 1, 2,3 , 3,4  ]}
                     renderItem={(item, index) => {
                       return <a href={'#'} className={styles.imageListItem}>
                         <BookItem src={require('../assets/cover/1.jpg')}/>
                       </a>;
                     }} rowSize={10}/>
        </Col>
        <Col span={4}>
          <List dataSource={data} size={'small'} header={'本周强推'}
                renderItem={(item, index) => {
                  return <li className={styles.bookItem}>{item.title}</li>;
                }}/>
        </Col>
      </Row>
      {/*广告*/}
      <Row className={styles.otherRow}>
        <Col span={24}>
          <Image src={require('../assets/banner/1.jpg')}/>
        </Col>
      </Row>
      {/*分类榜单推荐*/}
      <Tag className={styles.tag}>玄幻</Tag>
      <Row className={styles.row}>
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
      <Tag className={styles.tag}>仙侠</Tag>
      <Row className={styles.row}>
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
};

const Tag: React.FC<any> = (props: any, context: any) => {
  return <Row className={props.className}>
    <Col span={24}>{props.children}</Col>
  </Row>;
};

const BookItem: React.FC<any> = (props: ImageProps, context: any) => {
  // const { className, ...otherProps } = props;
  return <Image {...props} preview={false}/>;
};

interface ImageListProps<T> extends BaseProps{
  rowSize: number;
  dataSource: Array<T>;
  renderItem: (item: T, index: number) => React.ReactNode;

}

const ImageList: React.FC<ImageListProps<any>> = function <T>(props: ImageListProps<T>, context: any) {
  const rowSize = props.rowSize > 0 ? props.rowSize : 10;
  const dataSize = props.dataSource.length;
  let imgList = [];
  for (let left = dataSize; left > 0;) {
    const start = dataSize - left;
    const end = dataSize - left + (left > rowSize ? rowSize : left);
    imgList.push(<List dataSource={props.dataSource.slice(start, end)}
                       className={classNames('sb-image-list')}
                       renderItem={props.renderItem}/>);
    left -= rowSize;
  }
  const childList = React.Children.map(imgList, ((child, index) => child));
  return <div {...(props as React.HTMLAttributes<HTMLDivElement>)}>{childList}</div>;
};
