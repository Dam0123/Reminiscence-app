import React, {Component} from 'react';

import {View, Text, Image, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from '../style';

import {toDetail} from '~/utils/navTo';

const postURI = 'https://www.themoviedb.org/t/p/w220_and_h330_face';

export default function HorizonTalListItem({componentId, item, mode, type}) {
  const onNavPush = id => {
    toDetail(componentId, {type: type, mode: mode, id: id});
  };

  return (
    <TouchableOpacity
      style={styles.touchable}
      onPress={() => onNavPush(item.id)}
    >
      <Image
        style={styles.image}
        source={{
          uri: item.poster_path
            ? `${postURI}${item.poster_path}`
            : 'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png',
        }}
      />
      <Text style={styles.title} numberOfLines={1}>
        {mode === 'tv' ? item.name : item.title}
      </Text>
      <View style={styles.ratingLayout}>
        <Icon name="star-box" size={12} color="#e7eb13" />
        <View style={styles.ratingView}>
          <Text style={styles.ratingText}>{item.vote_average} / 10</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
