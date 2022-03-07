import React, {Component} from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  useWindowDimensions,
} from 'react-native';

import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import {styles} from '~/style';

import RatedScreen from '~/screens/Profile/RateScreen';
import WishlistScreen from '~/screens/Profile/WishlistScreen';

const renderScene = SceneMap({
  rated: RatedScreen,
  wishlist: WishlistScreen,
});

export default function ProfileScreen(props) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'rated', title: 'Rated'},
    {key: 'wishlist', title: 'Wishlist'},
  ]);

  const renderTabBar = props => (
    <TabBar
      renderLabel={({route, focused, color}) => (
        <Text style={focused ? {color: '#fff'} : {color: '#888'}}>
          {route.title}
        </Text>
      )}
      {...props}
      indicatorStyle={{backgroundColor: '#fff'}}
      style={{backgroundColor: '#000'}}
    />
  );

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.topBar}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.topBarTitle}>PROFILE</Text>
      </View>
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </SafeAreaView>
  );
}
