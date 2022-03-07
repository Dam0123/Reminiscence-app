import React, {Component} from 'react';

import {View, Text, StatusBar} from 'react-native';

import {styles} from './style';

export default function Header({title}) {
  return (
    <View style={styles.topBar}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.topBarTitle}>{title}</Text>
    </View>
  );
}
