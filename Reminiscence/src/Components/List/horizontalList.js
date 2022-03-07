import React, {Component} from 'react';

import {View, FlatList} from 'react-native';

import HorizonTalListItem from './ListItem/horizontalListItem';

export default function HrizontalList({componentId, data, mode, type}) {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index}) => (
        <HorizonTalListItem
          item={item}
          mode={mode}
          type={type}
          componentId={componentId}
        />
      )}
      data={data}
      keyExtractor={(item, index) => item.id}
    />
  );
}
