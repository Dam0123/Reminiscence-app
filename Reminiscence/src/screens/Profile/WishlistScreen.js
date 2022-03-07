import React, {Component} from 'react';

import {View, Text, ActivityIndicator} from 'react-native';

import {styles} from '~/style';

import VerticalList from '~/Components/List/verticalList';

import {getItem} from '~/utils/storage';

import {requestMyWishlist} from '~/API/RequestLocal';

import {Navigation} from 'react-native-navigation';

export default function WishlistScreen() {
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
    fetchMyWishList(uid);
  };

  const fetchMyWishList = async uid => {
    setLoading(false);
    const wishlist = await requestMyWishlist(uid);
    // console.log(wishlist.result);
    if (wishlist) {
      setData(wishlist.result);
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
        <VerticalList componentId={componentId} data={data} mode="movie" />
      )}
    </View>
  );
}
