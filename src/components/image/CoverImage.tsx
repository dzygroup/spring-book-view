// import LinkImage, { LinkImageProps } from '@/components/image/LinkImage';
// import React from 'react';
// import { Omit } from 'antd/lib/_util/type';
// import classNames from 'classnames';
// import styles from './style/cover.less';
//
// export interface CoverProps extends LinkImageProps {
//   size?: 'small' | 'normal' | 'large' | 'default';
// }
//
//
// export default function CoverImage(props: CoverProps) {
//   const className = classNames(getCoverSize(props), props.className);
//   const nextProps = { ...props, preview: props.preview ?? false, className };
//   return (
//     <LinkImage {...nextProps} />
//   );
// }
//
//
// function getCoverSize(props: CoverProps): string {
//   const coverSize = {
//     default: 'size-default',
//     small: 'size-small',
//     normal: 'size-normal',
//     large: 'size-large',
//   };
//   if (!props.size) {
//     return styles[coverSize.default];
//   }
//
//   return styles[coverSize[props.size]];
// }
