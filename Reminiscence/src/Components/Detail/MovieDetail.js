import {defaultMaxListeners} from 'events';

import React, {Component} from 'react';

import {View} from 'react-native';

import DetailContent from '~/Components/Detail/content';

import {toLocaleString} from '~/utils/date';

export default function MovieDetail({item}) {
  React.useEffect(() => {
    // console.log('item', item);
    toString(item.spoken_languages);
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
        title={'Release Date'}
        content={toLocaleString(item.release_date)}
      />
      <DetailContent
        title={'Languages'}
        content={toString(item.spoken_languages).join('\n')}
      />
      <DetailContent title={'Runtime'} content={`${item.runtime} minutes`} />
      <DetailContent
        title={'Videos'}
        content={item.video ? 'Official Teaser Trailer' : '-'}
      />
      <DetailContent title={'Status'} content={item.status} />
    </View>
  );
}
