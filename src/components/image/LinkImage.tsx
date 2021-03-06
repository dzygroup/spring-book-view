// import React, { AnchorHTMLAttributes, PureComponent } from 'react';
// import { BaseState } from '@/components/_util/types';
// import classNames from 'classnames';
// import { ImageProps } from 'rc-image';
// import antd, {} from 'antd';
// import styles from './style/LinkImage.less';
//
// export interface LinkImageProps extends ImageProps {
//   link?: string; // 图片跳转链接
// }
//
// export default class LinkImage extends PureComponent<LinkImageProps, BaseState> {
//
//   constructor(props: LinkImageProps) {
//     super(props);
//   }
//
//   render() {
//     const a = {
//       ...(this.props as AnchorHTMLAttributes<any>),
//       className: classNames(
//         this.props.className,
//         this.props.link ? styles.link : styles.unlink,
//       ),
//       href: this.props.link,
//     };
//     return (<a {...a}>
//       <antd.Image {...this.props}/>
//     </a>);
//   }
// }
