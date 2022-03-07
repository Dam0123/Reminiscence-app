import React, {Component} from 'react';

import {
  View,
  SafeAreaView,
  Text,
  StatusBar,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import {Navigation} from 'react-native-navigation';

import ReviewList from '~/Components/List/reviewList';

import {styles} from '~/style';

import {toReviewPost} from '~/utils/navTo';

import {requestReviews, reqReviewRemove} from '~/API/RequestLocal';

import {getItem} from '~/utils/storage';

export default function ReviewScreen(props) {
  const compId = 'app.reminiscence.tabs.review';

  const [loading, setLoading] = React.useState(false);
  const [reviews, setReviews] = React.useState([]);

  React.useEffect(() => {
    const componentAppearListener =
      Navigation.events().registerComponentDidAppearListener(
        ({componentId: compId}) => {
          if ('app.reminiscence.tabs.review' === compId) {
            getUid();
          }
        },
      );

    return () => componentAppearListener.remove();
  }, []);

  const nav = () => {
    toReviewPost(props.componentId, {});
  };
  const getUid = async () => {
    const uid = await getItem();
    fetchGetReviews(uid);
  };

  const fetchGetReviews = async uid => {
    setLoading(false);
    const reviews = await requestReviews(uid);
    setReviews(reviews.result);
    setLoading(true);
  };

  const onRemoveButton = async value => {
    const remove = await reqReviewRemove(value);
    if (remove) {
      const newArr = reviews.filter(k => k._id !== value._id);
      console.log(newArr)
      setReviews(newArr);
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.topBar}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.topBarTitle}>REVIEW</Text>
        <TouchableOpacity
          onPress={() => nav()}
          style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}
        >
          <Text style={{color: '#fff'}}>POST</Text>
        </TouchableOpacity>
      </View>
      {!loading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      ) : (
        <ReviewList data={reviews} onRemoveButton={onRemoveButton} />
      )}
    </SafeAreaView>
  );
}
