import React, {Component} from 'react';

import {View, SafeAreaView, Text, ScrollView} from 'react-native';

import {styles} from '~/style';

import Header from '~/Components/Topbar/header';
import SectionTitle from '~/Components/Topbar/section';

import Banner from '~/Components/Banner/Banner';

import HrizontalList from '~/Components/List/horizontalList';

import {tvPopular, tvTopData} from '~/dummyDataset';

import {requestDataset} from '~/API/GetMovies';

export default function TvScreen(props) {
  const [popular, setPopular] = React.useState([]);
  const [upComing, setUpcoming] = React.useState([]);

  React.useEffect(() => {
    reqeustPopular();
    reqeustUpcomming();
  }, []);

  reqeustUpcomming = async () => {
    const item = await requestDataset('tv', 'top_rated');
    if (item.results) {
      setUpcoming(item.results);
    }
  };

  reqeustPopular = async () => {
    const item = await requestDataset('tv', 'popular');
    if (item.results) {
      setPopular(item.results);
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <Header title="TV" />
      <ScrollView>
        <SectionTitle text="The latest TV shows" />
        <Banner items={tvPopular} compId={props.componentId} />
        {/* <SectionTitle text="Popular TV Shows" hasSeeAll={true} /> */}

        <SectionTitle
          text="Popular TV Shows"
          hasSeeAll={true}
          componentId={props.componentId}
          mode="tv"
          type="popular"
        />
        <HrizontalList
          data={popular}
          mode="tv"
          type="popular"
          componentId={props.componentId}
        />
        <SectionTitle
          text="Top Rated TV Shows"
          hasSeeAll={true}
          componentId={props.componentId}
          mode="tv"
          type="top_rated"
        />
        <HrizontalList
          data={upComing}
          mode="tv"
          type="top_rated"
          componentId={props.componentId}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
