import React, {Component} from 'react';

import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {styles} from './style';

export default function DetailContent({title, content}) {
  return (
    <View style={styles.contentLayout}>
      <Text style={styles.contentTitle}>{title}</Text>
      <Text style={styles.contentText}>{content}</Text>
    </View>
  );
}
