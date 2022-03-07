import React, {Component} from 'react';

import {Image} from 'react-native';

import {styles} from '../style';

const postURI = 'https://www.themoviedb.org/t/p/w220_and_h330_face';

export default function ListItemPoster({item, mode, horizontal}) {
  return (
    <Image
      style={horizontal ? styles.image : styles.imageVertical}
      source={{
        uri: item.poster_path
          ? `${postURI}${item.poster_path}`
          : 'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png',
      }}
    />
  );
}
