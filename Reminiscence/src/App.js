import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import {main} from '~/stack/NavigationStack';

import {getItem, setItem, clear} from '~/utils/storage';

const App = () => {
  React.useEffect(() => {
    geeUserIdentity();
  }, []);

  const geeUserIdentity = async () => {
    const uid = await getItem();
    if (!uid) {
      updateUserIdentity();
      return;
    }
    main();
  };

  const updateUserIdentity = async () => {
    await setItem('uid', String(new Date().getTime()));
    main();
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
      }}
    >
      <Text style={{color: '#fff', fontSize: 42, fontWeight: '500'}}>
        reminiscence
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
