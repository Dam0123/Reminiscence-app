import {defaultMaxListeners} from 'events';

import React, {Component} from 'react';

import {View} from 'react-native';

import DetailContent from '~/Components/Detail/content';

import {toLocaleString} from '~/utils/date';

export default function TvShowDetail({item}) {
  React.useEffect(() => {
    console.log('item', item);
    // toString(item.spoken_languages);
  }, []);

  const toString = arr => {
    return arr.map(a => {
      return a.english_name;
    });
  };

  return (
    <View>
      <DetailContent title={'OverView'} content={item.overview} />
      <DetailContent
        title={'First Aired Episode'}
        content={toLocaleString(item.first_air_date)}
      />
      <DetailContent
        title={'Last Aired Episode'}
        content={toLocaleString(item.last_air_date)}
      />
      <DetailContent
        title={'Total Episode'}
        content={item.number_of_episodes}
      />
      <DetailContent title={'Total Seasons'} content={item.number_of_seasons} />
      <DetailContent title={'Status'} content={item.status} />
    </View>
  );
}
