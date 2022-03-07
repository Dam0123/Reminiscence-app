import React, {Component} from 'react';

import {View, Text, ActivityIndicator} from 'react-native';

import {styles} from '~/style';

import VerticalList from '~/Components/List/verticalList';

import {requestMovies} from '~/API/GetMovies';

export default function SeeallScreen(props) {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [page, setSpage] = React.useState(1);

  React.useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    console.log(props);
    setLoading(false);
    const movies = await requestMovies(props.mode, props.type, 1);
    if (movies) {
      setData(data.concat(movies.results));
      setSpage(page => page + 1);
      setLoading(true);
    }
  };

  return (
    <View style={styles.root}>
      {!loading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      ) : (
        <VerticalList
          data={data}
          type={props.type}
          mode={props.mode}
          loadMore={loadData}
          componentId={props.componentId}
        />
      )}
    </View>
  );
}
