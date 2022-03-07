import React, {Component} from 'react';

import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../style';

import {toDetail} from '~/utils/navTo';

export default function BannerItem({componentId, mode, item}) {
  const onPressDetail = () => {
    toDetail(componentId, {type: null, mode: mode, id: item.id});
  };
  return (
    <View style={styles.bannerRoot}>
      <ImageBackground
        imageStyle={styles.imageStyle}
        source={{
          uri: `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${item.backdrop_path}`,
        }}
        style={styles.bannerImageSize}
      >
        <View style={styles.bannerLayout}>
          <View style={styles.posterImageLayout}>
            <Image
              style={styles.posterImageSize}
              source={{
                uri: `https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`,
              }}
            />
          </View>
          <View style={styles.detailLayout}>
            <Text numberOfLines={2} style={styles.title}>
              {item.title ? item.title : item.name}
            </Text>
            <View style={{flex: 1}}>
              <Text numberOfLines={4} style={styles.text}>
                {item.overview}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.detailButton}
              onPress={() => onPressDetail()}
            >
              <Text style={{color: '#fff'}}>View Detail</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
