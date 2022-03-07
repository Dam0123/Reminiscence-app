import React, {Component} from 'react';

import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './style';

import {movieGenre} from '~/assets/genre';

export default function DetailHeader({item, addWishList}) {
  return (
    <View style={styles.bannerRoot}>
      <ImageBackground
        imageStyle={styles.imageStyle}
        source={{
          uri: item.backdrop_path
            ? `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${
                item !== undefined ? item.backdrop_path : item.poster_path
              }`
            : 'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png',
        }}
        style={styles.bannerImageSize}
      >
        <View style={styles.bannerLayout}>
          <View style={styles.posterImageLayout}>
            <Image
              style={styles.posterImageSize}
              source={{
                uri: item.poster_path
                  ? `https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`
                  : 'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png',
              }}
            />
          </View>
          <View style={styles.detailLayout}>
            <Text numberOfLines={3} style={styles.title}>
              {item.original_title ? item.title : item.name}
            </Text>
            <View style={styles.ratingLayout}>
              <Icon name="star-box" size={12} color="#e7eb13" />
              <View style={styles.ratingView}>
                <Text style={styles.ratingText}>
                  {item.rating ? item.rating : item.vote_average} /{' '}
                  {item.rating ? 5 : 10}
                </Text>
              </View>
            </View>
            <View style={{position: 'absolute', top: 210}}>
              <View style={{flexDirection: 'row'}}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {item.genres &&
                    item.genres.map(genre => (
                      <Text key={genre.id} style={{color: '#fff'}}>
                        {genre.name}{' '}
                      </Text>
                    ))}
                </ScrollView>
              </View>
              <TouchableOpacity
                onPress={() => addWishList(item)}
                style={{
                  backgroundColor: '#fff',
                  marginTop: 10,
                  padding: 5,
                  borderRadius: 8,
                  width: !item.isWish ? 120 : 150,
                }}
              >
                <Text numberOfLines={1} style={{textAlign: 'center', color: "#000"}}>
                  {!item.isWish ? 'Add to Wishlist' : 'Remove to Wishlist'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
