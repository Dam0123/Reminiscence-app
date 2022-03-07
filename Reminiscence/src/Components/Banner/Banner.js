import React, {Component} from 'react';

import {View, FlatList} from 'react-native';

import {Navigation} from 'react-native-navigation';

import BannerItem from './BannerItem/BannerItem';

let CurrentSlide = 0;

export default function Banner({compId, mode, items}) {
  const componentAppearListener = null;
  let timerId = null;

  const flatRef = React.useRef();

  React.useEffect(() => {
    const componentAppearListener =
      Navigation.events().registerComponentDidAppearListener(
        ({componentId: componentId}) => {
          console.log('appear', compId, componentId);
          if (componentId === compId) {
            _startAutoPlay();
          } else {
            clearInterval(timerId);
            timerId = null;
            CurrentSlide = 0;
          }
        },
      );
  }, []);

  React.useEffect(() => {
    return () => {
      if (componentAppearListener) {
        clearInterval(timerId);
        timerId = null;
        CurrentSlide = 0;

        componentAppearListener.remove();
      }
    };
  });

  const _goToNextPage = () => {
    if (CurrentSlide >= items.length - 1) {
      CurrentSlide = 0;
    }
  
    if (flatRef.current) {
      flatRef.current.scrollToIndex({
        index: ++CurrentSlide,
        animated: true,
      });
    }
  };

  const _startAutoPlay = () => {
    timerId = setInterval(_goToNextPage, 4000);
  };

  return (
    <FlatList
      horizontal
      pagingEnabled
      ref={flatRef}
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index}) => (
        <BannerItem item={item} componentId={compId} mode={mode} />
      )}
      data={items}
      keyExtractor={(item, index) => item.id}
    />
  );
}
