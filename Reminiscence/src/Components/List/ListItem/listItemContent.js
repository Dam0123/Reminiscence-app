import React, {Component} from 'react';

import {View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from '../style';

export default function ListItemContent({item, mode, horizontal}) {
  return (
    <View style={styles.textFiled}>
      <Text style={styles.title} numberOfLines={1}>
        {item.name ? item.name : item.title}
      </Text>
      <View style={styles.ratingLayout}>
        <Icon name="star-box" size={12} color="#e7eb13" />
        <View style={styles.ratingView}>
          <Text style={styles.ratingText}>
            {item.vote_average} / {item.rating ? 5 : 10}
          </Text>
        </View>
      </View>
    </View>
  );
}
