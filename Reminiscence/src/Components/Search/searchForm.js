import React, {Component} from 'react';

import {
  View,
  SafeAreaView,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default function SearchForm({onClickSearchButton}) {
  const [keyword, setKeyword] = React.useState('');

  const _onClickSearchButton = () => {
    onClickSearchButton(keyword);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 1,
        backgroundColor: '#fff',
        borderRadius: 16,
      }}
    >
      <View style={{flex: 1, justifyContent: 'center', height: 50, flexDirection: 'row', paddingLeft: 10, paddingRight: 10, alignItems: 'center'}}>
        <TextInput
          style={{flex: 1, color: '#000', height: 50}}
          placeholderTextColor="#888"
          placeholder="search"
          value={keyword}
          onChangeText={text => setKeyword(text)}
        />
        <TouchableOpacity onPress={() => _onClickSearchButton()}>
        <MaterialIcon name="search" size={24} color="#000" />
      </TouchableOpacity>
      </View>
      
    </View>
  );
}
