import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  bannerRoot: {height: 200, backgroundColor: '#000'},
  imageStyle: {opacity: 0.4},
  bannerImageSize: {width: width, height: 200},
  bannerLayout: {flexDirection: 'row', flex: 1},
  posterImageLayout: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  posterImageSize: {height: 170, width: 120, borderRadius: 8},
  detailLayout: {
    flex: 1,
    height: 170,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingRight: 10,
  },
  title: {fontWeight: 'bold', fontSize: 18, marginTop: 10, color: '#fff'},
  text: {fontWeight: '400', fontSize: 14, marginTop: 10, color: '#fff'},
  detailButton: {
    borderRadius: 8,
    backgroundColor: '#f00',
    padding: 5,
    marginTop: 10,
  },
});
