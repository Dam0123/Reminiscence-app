import React, {Component} from 'react';

import PropTypes from 'prop-types';

import {View, Text, TouchableOpacity} from 'react-native';

import {styles} from './style';
import {toSeeall} from '~/utils/navTo';

export default function SectionTitle({
  componentId,
  mode,
  type,
  text,
  hasSeeAll,
}) {
  const pushNavigation = () => {
    if (hasSeeAll && componentId !== undefined) {
      toSeeall(componentId, text, {type: type, mode: mode});
    }
  };

  return (
    <View style={styles.sectionView}>
      <View style={styles.sectionTitleView}>
        <Text style={styles.sectionTitle}>{text}</Text>
      </View>
      {hasSeeAll ? (
        <TouchableOpacity
          onPress={() => pushNavigation()}
          style={styles.touchableView}
        >
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

SectionTitle.propTypes = {
  hasSeeAll: PropTypes.bool,
};

SectionTitle.defaultProps = {
  hasSeeAll: false,
};
