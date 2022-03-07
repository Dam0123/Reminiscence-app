import React, {Component} from 'react';

import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {styles} from './style';

import {reqReviewRemove} from '~/API/RequestLocal';

export default function ReviewList({data, onRemoveButton}) {
  const onPressRemove = item => {
    Alert.alert('Delete Post', 'Are you sure?', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => onRemoveButton({_id: item._id, uid: item.uid}),
      },
    ]);
  };

  return (
    <FlatList
      data={data}
      renderItem={({item, index}) => (
        <View key={index} style={styles.reviewLayout}>
          <Image
            style={{width: '100%', height: 350}}
            source={{
              uri: `http://218.158.195.201:5000/image/${item.filename}`,
            }}
          />
          <View style={styles.reviewTextLayout}>
            <Text style={styles.reviewUserNameText}>
              {item.uid} {'\t'}
              <Text style={styles.reviewContent}>{item.review}</Text>
            </Text>
            <View style={styles.reviewCreatedAtLayout}>
              <Text style={styles.reviewCreatedAt}>{item.createdAt}</Text>
            </View>
          </View>
          <View
            style={{
              // backgroundColor: '#1db989',
              paddingLeft: 20,
              paddingRight: 20,
              marginTop: 10,
              marginBottom: 10,
              alignItems: 'flex-end',
            }}
          >
            <TouchableOpacity
              onPress={() => onPressRemove(item)}
              style={{padding: 5}}
            >
              <Text style={{color: '#fff'}}>Remove</Text>
            </TouchableOpacity>
          </View>
          <View style={{widht: '100%', height: 1, backgroundColor: '#222'}} />
        </View>
      )}
      keyExtractor={(item, index) => index}
    />
  );
}
