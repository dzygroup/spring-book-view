import React from 'react';
import { Link as UmiLink } from 'umi';
import { BaseProps } from '@/components/_util/types';
import { isUrl } from '@/components/_util/url';

export interface BaseLinkProps extends BaseProps {
  to: string;
  renderLink?: (to: string) => React.ReactElement;

  [name: string]: any;
}

export default function Go(props: BaseLinkProps) {
  if (props.renderLink) {
    return props.renderLink(props.to);
  }
  if (isUrl(props.to)) {
    return <a href={props.to} className={props.className}>{props.children}</a>;
  } else {
    return <UmiLink to={props.to} className={props.className}>{props.children}</UmiLink>;
  }
}
