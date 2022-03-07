import React, {Component} from 'react';

import PropTypes from 'prop-types';

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

import SectionTitle from '~/Components/Topbar/section';

import HrizontalList from '~/Components/List/horizontalList';

import {searchTvData, searchMovieData} from '~/dummyDataset';

import KeywordList from '~/Components/Keywords/keywordList';
import SearchForm from '~/Components/Search/searchForm';

export default function SearchResults(props) {
  const [keyword, setKeyword] = React.useState([]);
  const [keywords, setKeywords] = React.useState([
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
  ]);
  const [open, setOpen] = React.useState(false);
  const [isSelectedKeyword, setIsSelectedKeyword] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [tvshow, setTvshow] = React.useState([]);

  React.useEffect(() => {
    setKeyword(keyword.concat(props.keyword));
    setIsSelectedKeyword(props.isSelectedKeyword);
    if (props.isSelectedKeyword) {
      onClickSearchButton(props.keyword.id);
      setKeywords(keywords.filter(k => k.id !== props.keyword.id));
    }
  }, []);

  const loadMovie = keywordId => {
    setOpen(false);
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=7166fe0fb1a7539ceb3533ce77c77a40&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_keywords=${keywordId}&with_watch_monetization_types=flatrate&page=1`,
    )
      .then(res => res.json())
      .then(res => {
        setMovies(res.results);
        setOpen(true);
      })
      .catch(err => console.log('repsonse error', err));
  };

  const loadTvShow = keywordId => {
    setOpen(false);
    fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=7166fe0fb1a7539ceb3533ce77c77a40&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_keywords=${keywordId}&with_watch_monetization_types=flatrate&page=1`,
    )
      .then(res => res.json())
      .then(res => {
        setTvshow(res.results);
        setOpen(true);
      })
      .catch(err => console.log('repsonse error', err));
  };

  const loadMovieWithSearchIcon = keyword => {
    setOpen(false);
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=7166fe0fb1a7539ceb3533ce77c77a40`,
    )
      .then(res => res.json())
      .then(res => {
        setMovies(res.results);
        setOpen(true);
      })
      .catch(err => console.log('repsonse error', err));
  };

  const loadTvShowWithSearchIcon = keyword => {
    setOpen(false);
    fetch(
      `https://api.themoviedb.org/3/search/tv?query=${keyword}&api_key=7166fe0fb1a7539ceb3533ce77c77a40`,
    )
      .then(res => res.json())
      .then(res => {
        setTvshow(res.results);
        setOpen(true);
      })
      .catch(err => console.log('repsonse error', err));
  };

  const onPressSearchIcon = value => {
    const keyword = value.replace(' ', '%2B');
    loadMovieWithSearchIcon(keyword);
    loadTvShowWithSearchIcon(keyword);
  };

  const onClickSearchButton = keywordId => {
    loadMovie(keywordId);
    loadTvShow(keywordId);
  };

  const popKeyword = k => {
    let updateKeyword = keyword;
    updateKeyword = keyword.concat(k);
    setKeywords(keywords.filter(key => key.id !== k.id));
    setKeyword(updateKeyword);
    onClickSearchButton(toString(updateKeyword).join(','));
  };

  const popSelectedKeyword = k => {
    if (keyword.length >= 2) {
      let updateKeyword = keyword;
      updateKeyword = keyword.filter(key => key.id !== k.id);
      setKeywords(keywords.concat(k));
      setKeyword(updateKeyword);
      onClickSearchButton(toString(updateKeyword).join(','));
    }
  };

  const toString = arr => {
    return arr.map(a => {
      return a.id;
    });
  };

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView>
        {isSelectedKeyword ? (
          // <KeywordList data={[keyword]} horizontal={true} />
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {keyword.map(k => (
              <TouchableOpacity
                onPress={() => popSelectedKeyword(k)}
                key={k.id}
                style={{
                  backgroundColor: '#fff',
                  borderRadius: 8,
                  padding: 5,
                  margin: 5,
                  height: 28,
                }}
              >
                <Text style={{color: '#000'}}>{k.name}</Text>
              </TouchableOpacity>
            ))}
            <View
              style={{
                width: 1,
                height: '100%',
                backgroundColor: '#fff',
                marginLeft: 10,
                marginRight: 10,
              }}
            />
            {keywords.map((k, index) => (
              <TouchableOpacity
                key={`${k.id}_${index}`}
                style={[
                  {
                    backgroundColor: '#000',
                    borderRadius: 8,
                    padding: 5,
                    margin: 5,
                    height: 28,
                    borderWidth: 1,
                    borderColor: '#fff',
                  },
                ]}
                onPress={() => popKeyword(k, index)}
              >
                <Text style={{color: '#fff'}}>{k.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        ) : (
          <View style={{marginTop: 10}}>
            <SearchForm onClickSearchButton={onPressSearchIcon} />
          </View>
        )}
        {open ? (
          <View>
            <SectionTitle text="Movies Results" />
            <HrizontalList
              data={movies}
              mode="movie"
              componentId={props.componentId}
              // type="popular"
            />
            <SectionTitle text="TV Shows Results" />
            <HrizontalList
              data={tvshow}
              mode="tv"
              // type="upcoming"
              componentId={props.componentId}
            />
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}

SearchResults.propTypes = {
  tvData: PropTypes.array,
  movieData: PropTypes.array,
};

SearchResults.defaultProps = {
  tvData: [],
  movieData: [],
};
