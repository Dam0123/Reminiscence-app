import React, {Component} from 'react';

import PropTypes from 'prop-types';

import {FlatList} from 'react-native';

import KeywordItem from './keyword';

export default function KeywordList({data, horizontal, onClickKeyword}) {
  const _onClickKeyword = item => {
    onClickKeyword(item);
  };

  return (
    <FlatList
      style={{marginLeft: 15, marginRight: 15}}
      bounces={horizontal ? true : false}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      horizontal={horizontal}
      renderItem={({item, index}) => (
        <KeywordItem
          item={item}
          horizontal={horizontal}
          onClickKeyword={_onClickKeyword}
        />
      )}
      data={data}
      keyExtrator={(item, index) => item.id}
      numColumns={!horizontal ? 4 : null}
    />
  );
}

KeywordList.propTypes = {
  data: PropTypes.array,
  horizontal: PropTypes.bool,
  onClickKeyword: PropTypes.func,
};

KeywordList.defaultProps = {
  data: [],
  horizontal: false,
};
