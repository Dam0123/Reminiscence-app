import React, {Component} from 'react';

import {
  View,
  SafeAreaView,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {styles} from '~/style';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/Components/Topbar/header';

import SectionTitle from '~/Components/Topbar/section';

import HrizontalList from '~/Components/List/horizontalList';

import KeywordList from '~/Components/Keywords/keywordList';

import SearchResults from '~/screens/search/searchResults';

import SearchForm from '~/Components/Search/searchForm';

import {Navigation} from 'react-native-navigation';

export default function SearchScreen(props) {
  const [movies, setMovies] = React.useState([]);
  const [keyword, setKeyword] = React.useState('');

  const onPushResultScreen = (isSelectedKeyword, item) => {
    Navigation.push(props.componentId, {
      component: {
        name: 'app.reminiscence.screen.search.result',
        options: {
          topBar: {
            backButton: {
              showTitle: false,
              color: '#fff',
            },
            background: {
              color: '#000',
            },
          },
        },
        passProps: {keyword: item, isSelectedKeyword: isSelectedKeyword},
      },
    });
  };

  const onClickSearchButton = () => {
    onPushResultScreen(false);
  };

  const onClickKeyword = item => {
    setKeyword(item);
    onPushResultScreen(true, item);
  };

  return (
    <SafeAreaView style={styles.root}>
      <Header title="SEARCH" />
      {/* <SearchForm onClickSearchButton={onClickSearchButton} /> */}
      <TouchableOpacity
        onPress={() => onClickSearchButton()}
        opacity={0}
        style={{
          flexDirection: 'row',
          marginLeft: 18,
          marginRight: 18,
          padding: 10,
          backgroundColor: '#fff',
          borderRadius: 16,
        }}
      >
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={{color: '#000'}} onChangeText={text => setKeyword(text)}>
            Search for a movie, tv show
          </Text>
        </View>
        <View>
          <MaterialIcon name="search" size={24} color="#000" />
        </View>
      </TouchableOpacity>

      <SectionTitle text="Tag Recommendations" />
      <KeywordList
        data={[
          {name: '#Concert', id: 6029},
          {name: '#Birthday', id: 5732},
          {name: '#Fashion-Styles', id: 15479},
          {name: '#Dark', id: 9826},
          {name: '#Raining', id: 2217},
          {name: '#Depressing', id: 894},
          {name: '#With-lovers', id: 9840},
          {name: '#Anime', id: 210024},
          {name: '#Party', id: 10275},
          {name: '#Thrilling', id: 9950},
          {name: '#Feel-Good', id: 9799},
          {name: '#Emotional', id: 1647},
        ]}
        onClickKeyword={onClickKeyword}
      />
      {/* {!hasResult ? (
        <View>
          <View
            style={{flexDirection: 'row', paddingLeft: 20, paddingRight: 20}}
          >
            <View style={{flex: 1, justifyContent: 'center'}}>
              <TextInput
                style={{color: '#fff'}}
                placeholderTextColor="#eee"
                placeholder="search"
                value={keyword}
                onChangeText={text => setKeyword(text)}
              />
            </View>
            <TouchableOpacity>
              <MaterialIcon name="search" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
          <SectionTitle text="Tag Recommendations" />
          <KeywordList
            data={[
              {
                name: 'science fiction writer',
                id: 268889,
              },
              {
                name: 'science fiction',
                id: 281308,
              },
              {
                name: 'action hero',
                id: 219404,
              },
              {
                name: 'retired action hero',
                id: 264514,
              },
            ]}
            onClickKeyword={onClickKeyword}
          />
        </View>
      ) : (
        <ScrollView>
          {isSelectedKeyword ? (
            <KeywordList
              data={[
                {
                  name: 'action hero',
                  id: 219404,
                },
                {
                  name: 'retired action hero',
                  id: 264514,
                },
              ]}
              horizontal={true}
            />
          ) : (
            <View
              style={{flexDirection: 'row', paddingLeft: 20, paddingRight: 20}}
            >
              <View style={{flex: 1, justifyContent: 'center'}}>
                <TextInput
                  style={{color: '#fff'}}
                  placeholderTextColor="#eee"
                  placeholder="search"
                  value={keyword}
                  onChangeText={text => setKeyword(text)}
                />
              </View>
              <TouchableOpacity>
                <MaterialIcon name="search" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
          )}
          <SearchResults tvData={searchTvData} movieData={searchMovieData} />
        </ScrollView>
      )} */}
    </SafeAreaView>
  );
}
