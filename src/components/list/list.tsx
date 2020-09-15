import { List as AntdList } from 'antd';
import React from 'react';
import { ListItemMetaProps, ListProps } from 'antd/lib/list';
import { isElement } from 'react-dom/test-utils';

export interface BaseListProps<T> extends ListProps<T> {
  meta?: ListItemMetaProps | ((item: T, index: number) => ListItemMetaProps);

  [name: string]: any;
}

export default function List<T>(props: BaseListProps<T>) {
  const {meta, ...p} = props;
  return (<AntdList  {...p} renderItem={(item: T, index: number) => {
    return props.renderItem ?
      props.renderItem(item, index) :
      <AntdList.Item>
        {getItemMetaOrDefault(props, item, index)}
      </AntdList.Item>;
  }}/>);
}

function getItemMetaOrDefault<T>(props: BaseListProps<T>, item: T, index: number) {
  const meta = props.meta instanceof Function ? props.meta(item, index) : props.meta;
  if (meta) {
    return <AntdList.Item.Meta {...meta}/>;
  }
  if (isElement(item)) return item;
  throw new Error('Item 修饰错误');
}
