// import { BasicProps } from 'antd/lib/layout/layout';
// import React from 'react';
// import { Image } from 'antd';
// import { ImageProps } from 'rc-image';
// import './style/BookItem.less';
// import styles from './style/BookItem.less';
// import classNames from 'classnames';
//
// export interface BookItemProps extends ImageProps {
//   size?: { width: string | number, height: string | number };
//   title?: string;
//   description?: string;
//   author?: string;
//   dir?: 'vertical' | 'horizontal';
// }
//
// export default (props: BookItemProps) => {
//
//   return (<div {...(props as React.HTMLAttributes<HTMLDivElement>)}
//                className={classNames(`sb-book-item-${props.dir ?? 'vertical'}`, props.className)}>
//     <Image width={props.size?.width} height={props.size?.height} src={props.src}/>
//     <div style={{height: '100%'}}>
//       <h3>name</h3>
//       <p>sdfsdfsafsafdsdfffffffffffffffffffff</p>
//     </div>
//   </div>);
//
// }
