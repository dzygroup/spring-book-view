import LinkImage, { LinkImageProps } from '@/components/image/linkImage';
import React from 'react';
import { Omit } from 'antd/lib/_util/type';
import classNames from 'classnames';
import styles from './style/cover.less';

export interface CoverProps extends LinkImageProps {
  size?: 'small' | 'normal' | 'large' | 'default';
}


export default function Cover(props: CoverProps) {
  const className = classNames(props.className, getCoverSize(props));
  const nextProps = { ...props, preview: props.preview ?? false, className };
  return (
    <LinkImage {...nextProps} />
  );
}


function getCoverSize(props: CoverProps): string {
  const coverSize = {
    default: 'size-default',
    small: 'size-small',
    normal: 'size-normal',
    large: 'size-large',
  };
  if (!props.size) {
    return styles[coverSize.default];
  }

  return styles[coverSize[props.size]];
}
