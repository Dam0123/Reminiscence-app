import React, {Component} from 'react';

import {View, Text, ActivityIndicator} from 'react-native';

import {styles} from '~/style';

import VerticalList from '~/Components/List/verticalList';

import {getItem} from '~/utils/storage';

import {requestMyRated} from '~/API/RequestLocal';

import {Navigation} from 'react-native-navigation';

export default function RatedScreen() {
  const compId = 'app.reminiscence.tabs.profile';
  const componentId = 'app.reminiscence.tabs.profile';

  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const componentAppearListener =
      Navigation.events().registerComponentDidAppearListener(
        ({componentId: compId}) => {
          if ('app.reminiscence.tabs.profile' === compId) {
            console.log('did appear', compId);
            getUid();
          }
        },
      );

    return () => componentAppearListener.remove();
  }, []);

  const getUid = async () => {
    const uid = await getItem();
    fetchMyRated(uid);
  };

  const fetchMyRated = async uid => {
    setLoading(false);
    const rated = await requestMyRated(uid);
    // console.log(rated.result);
    if (rated) {
      setData(rated.result);
    }
    setLoading(true);
  };

  return (
    <View style={styles.root}>
      {!loading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      ) : (
        <VerticalList componentId={componentId} data={data} />
      )}
    </View>
  );
}
