import React, {Component} from 'react';

import {View, Text, Image, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import ListItemContent from './listItemContent';
import ListItemPoster from './listItemPoster';

import {styles} from '../style';

import {toDetail} from '~/utils/navTo';

export default function VerticalListItem({
  item,
  mode,
  type,
  horizontal,
  componentId,
}) {
  const onNavPush = id => {
    toDetail(componentId, {type: type, mode: mode, id: id});
  };

  return (
    <TouchableOpacity
      style={styles.touchableVertical}
      onPress={() => onNavPush(item.id)}
    >
      <ListItemPoster item={item} mode={mode} horizontal={horizontal} />
      <ListItemContent item={item} mode={mode} />
    </TouchableOpacity>
  );
}
