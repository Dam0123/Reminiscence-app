import React, {Component} from 'react';

import {
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  Platform,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import * as ImagePicker from 'react-native-image-picker';

import {Navigation} from 'react-native-navigation';

import {getItem} from '~/utils/storage';

import {styles} from '~/style';

const options = {
  title: 'Select Image',
  mediaType: 'photo',
};
export default function ReviewPostScreen(props) {
  const [load, setLoad] = React.useState(true);
  const [display, setDisplay] = React.useState(null);
  const [response, setResponse] = React.useState(null);
  const [text, setText] = React.useState('');

  const fetchPost = async () => {
    const uid = await getItem();
    let formData = new FormData();
    formData.append('image', response);
    formData.append('text', text);
    formData.append('uid', uid);
    console.log(formData);
    fetch('http://218.158.195.201:5000/create/review', {
      method: 'POST',
      headers: {'Content-Type': 'multipart/form-data'},
      body: formData,
    })
      .then(res => res.json())
      .then(res => {
        Navigation.pop(props.componentId);
      })
      .catch(err => console.log(err));
  };

  const onSelectImage = React.useCallback(() => {
    setLoad(false);
    ImagePicker.launchImageLibrary(options, response => {
      if (response.assets) {
        console.log('response', response.assets);
        const res = response.assets[0];
        const source = {
          uri:
            Platform.OS === 'android'
              ? res.uri
              : res.uri.replace('file://', ''),
          type: res.type,
          name:
            res.fileName === null || res.fileName === undefined
              ? 'file'
              : res.fileName,
        };
        setResponse(source);
        setDisplay(res.uri);
        setLoad(true);
      } else {
        console.log('response null');
      }
    });
  });
  return (
    <SafeAreaView style={styles.root}>
      <TouchableOpacity
        onPress={() => onSelectImage()}
        style={{
          borderWidth: !display ? 1 : 0,
          borderColor: '#888',
          height: 250,
          borderRadius: 8,
        }}
      >
        {!load ? (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
          >
            <ActivityIndicator size="large" color="#fff" />
          </View>
        ) : display ? (
          <Image
            resizeMode="cover"
            resizeMethod="scale"
            style={{width: '100%', height: 250, borderRadius: 8}}
            source={{uri: display}}
          />
        ) : (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
          >
            <Icon name="image-plus" size={48} color="#888" />
          </View>
        )}
      </TouchableOpacity>
      <View
        style={{
          borderWidth: 1,
          borderColor: '#888f',
          borderRadius: 8,
          marginTop: 10,
          flex: 1,
        }}
      >
        <TextInput
          multiline
          placeholder="write here"
          placeholderTextColor="#888"
          style={{padding: 5, color: '#ffffff'}}
          onChangeText={text => setText(text)}
        />
      </View>
      <TouchableOpacity
        style={{
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          marginTop: 10,
        }}
        onPress={() => fetchPost()}
      >
        <Text style={{color: '#000'}}>Add</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
