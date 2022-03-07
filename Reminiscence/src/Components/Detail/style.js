import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  bannerRoot: {height: 280, backgroundColor: '#000'},
  // bannerRoot: {backgroundColor: '#000'},
  imageStyle: {opacity: 0.4},
  bannerImageSize: {width: width, height: 200},
  bannerLayout: {flexDirection: 'row', flex: 1},
  posterImageLayout: {
    width: 160,
    justifyContent: 'center',
    alignItems: 'center',
  },
  posterImageSize: {
    height: 170,
    width: 120,
    borderRadius: 8,
    position: 'absolute',
    top: 100,
  },
  detailLayout: {
    flex: 1,
    justifyContent: 'flex-end',
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
  ratingLayout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    // backgroundColor: '#1db989',
  },
  ratingView: {flex: 1, paddingLeft: 10, paddingRight: 10},
  ratingText: {
    fontWeight: '400',
    fontSize: 12,
    color: '#fff',
  },
  contentTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '400',
  },
  contentText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 10,
  },
  contentLayout: {
    marginTop: 10,
    marginBottom: 10,
  },
});
