import React, {Component} from 'react';

import {View, SafeAreaView, Text, ScrollView} from 'react-native';

import {styles} from '~/style';

import Header from '~/Components/Topbar/header';
import SectionTitle from '~/Components/Topbar/section';

import Banner from '~/Components/Banner/Banner';

import HrizontalList from '~/Components/List/horizontalList';

import {moviePopular} from '~/dummyDataset';

import {requestDataset} from '~/API/GetMovies';

export default function MovieScreen(props) {
  const [popular, setPopular] = React.useState([]);
  const [upComing, setUpcoming] = React.useState([]);

  React.useEffect(() => {
    reqeustPopular();
    reqeustUpcomming();
  }, []);

  reqeustUpcomming = async () => {
    const item = await requestDataset('movie', 'upcoming');
    if (item.results) {
      setUpcoming(item.results);
    }
  };

  reqeustPopular = async () => {
    const item = await requestDataset('movie', 'popular');
    if (item.results) {
      setPopular(item.results);
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <Header title="MOVIE" />
      <ScrollView>
        <SectionTitle text="New Movie in Theater" />
        <Banner items={moviePopular} mode="movie" compId={props.componentId} />
        <SectionTitle
          text="Popular Movies"
          hasSeeAll={true}
          componentId={props.componentId}
          mode="movie"
          type="popular"
        />
        <HrizontalList
          data={popular}
          mode="movie"
          type="popular"
          componentId={props.componentId}
        />
        <SectionTitle
          text="Upcoming Movies"
          hasSeeAll={true}
          componentId={props.componentId}
          mode="movie"
          type="upcoming"
        />
        <HrizontalList
          data={upComing}
          mode="movie"
          type="upcoming"
          componentId={props.componentId}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
