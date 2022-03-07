import {defaultMaxListeners} from 'events';

import React, {Component} from 'react';

import {View, Text, ScrollView, ActivityIndicator} from 'react-native';

import {Rating, AirbnbRating} from 'react-native-ratings';

import {getItem} from '~/utils/storage';

import DetailHeader from '~/Components/Detail/header';

import MovieDetail from '~/Components/Detail/MovieDetail';
import TvShowDetail from '~/Components/Detail/TvDetail';
import {requestDetail} from '~/API/GetDetail';
import {styles} from '~/style';

export default function DetailScreen(props) {
  const [load, setLoad] = React.useState(false);
  const [detail, setDetail] = React.useState({});
  React.useEffect(() => {
    loadDetail();
  }, []);

  const loadDetail = async () => {
    fetchMyDetail();
  };

  const loadTMDBDetail = async () => {
    const req = await requestDetail(props.mode, props.id);
    if (req) {
      // console.log(req);
      setDetail(req);
      setLoad(true);
    }
  };

  const ratingCompleted = rating => {
    fetchUpdateRating(rating);
  };

  const fetchMyDetail = async () => {
    const uid = await getItem();

    fetch(`http://218.158.195.201:5000/detail/${props.id}/${uid}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setLoad(false);
        if (res.code !== 200) {
          loadTMDBDetail();
        } else {
          setDetail(res.result);
          setLoad(true);
        }
      })
      .catch(err => console.log(err));
  };

  const fetchUpdateRating = async rating => {
    const uid = await getItem();
    console.log(rating);
    fetch('http://218.158.195.201:5000/change/rated', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(Object.assign(detail, {uid: uid, rating: rating})),
    })
      .then(res => res.json())
      .then(res => {
        // console.log(res);
        setDetail({...detail, rating: rating});
      })
      .catch(err => console.log(err));
  };

  const fetchUpdateWishlist = async () => {
    const uid = await getItem();
    fetch('http://218.158.195.201:5000/wish', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(Object.assign(detail, {uid: uid})),
    })
      .then(res => res.json())
      .then(res => {
        // console.log(res);
        setDetail({...detail, isWish: res.result.wish});
      })
      .catch(err => console.log(err));
  };

  const onAddWishList = value => {
    fetchUpdateWishlist();
  };

  return (
    <View style={styles.root}>
      {!load ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      ) : (
        <ScrollView>
          <DetailHeader item={detail} addWishList={onAddWishList} />
          <Rating
            type="custom"
            starContainerStyle={{backgroundColor: '#1db989'}}
            ratingColor="#f1c40f"
            ratingBackgroundColor="#fff"
            ratingCount={5}
            showRating={false}
            imageSize={23}
            tintColor="#000"
            startingValue={detail.rating ? detail.rating : 0}
            onFinishRating={ratingCompleted}
            style={{
              paddingLeft: 20,
              alignItems: 'flex-start',
              backgroundColor: '#000',
            }}
          />
          <View
            style={{
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            {props.mode === 'movie' ? (
              <MovieDetail item={detail} />
            ) : (
              <TvShowDetail item={detail} />
            )}
          </View>
        </ScrollView>
      )}
    </View>
  );
}
