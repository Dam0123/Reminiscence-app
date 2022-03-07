import React, {Component} from 'react';

import {View, FlatList} from 'react-native';

import VerticalListItem from './ListItem/verticalListItem';

export default function VerticalList({
  data,
  mode,
  type,
  loadMore,
  componentId,
}) {
  const _loadMore = () => {
    loadMore();
  };

  return (
    <FlatList
      style={{paddingTop: 10}}
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index}) => (
        <VerticalListItem
          componentId={componentId}
          item={item}
          mode={mode}
          type={type}
          horizontal={false}
        />
      )}
      data={data}
      keyExtractor={(item, index) => item.id}
      numColumns={2}
      // onEndReached={_loadMore}
      // onEndReachedThreshold={1}
    />
  );
}
