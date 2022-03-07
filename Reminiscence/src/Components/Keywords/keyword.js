import React, {Component} from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

export default function KeywordItem({item, horizontal, onClickKeyword}) {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: '#fff',
          borderRadius: 8,
          padding: 5,
          margin: 5,
          height: 28,
        },
        horizontal ? {} : {},
      ]}
      onPress={() => onClickKeyword(item)}
    >
      <Text numberOfLines={1} style={{color: '#000'}}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
}
