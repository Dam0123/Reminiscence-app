import React, {Component} from 'react';

import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#000',
  },
  tabRoot: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 40,
  },
  topBar: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
  },
  topBarTitle: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
});
