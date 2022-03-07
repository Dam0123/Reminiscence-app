import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  touchable: {
    width: 100,
    flexDirection: 'column',
    marginRight: 15,
    marginLeft: 15,
  },
  touchableVertical: {
    flex: 0.5,
    flexDirection: 'column',
    marginBottom: 10,
    marginRight: 15,
    marginLeft: 15,
    // backgroundColor: '#1db989',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {height: 180, width: 120, borderRadius: 8},
  imageVertical: {height: 240, width: '100%', borderRadius: 8},
  title: {fontWeight: '500', fontSize: 13, marginTop: 5, color: '#fff'},
  titleVertical: {
    fontWeight: '500',
    fontSize: 13,
    marginTop: 5,
    color: '#fff',
  },
  textFiled: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
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
  reviewLayout: {
    marginBottom: 10,
    paddingBottom: 10,
  },
  reviewTextLayout: {paddingLeft: 10, paddingRight: 10, paddingTop: 10},
  reviewUserNameText: {color: '#fff', fontSize: 18, fontWeight: '500'},
  reviewContent: {color: '#fff', fontSize: 16, fontWeight: '300'},
  reviewCreatedAtLayout: {paddingTop: 10},
  reviewCreatedAt: {color: '#eee', fontSize: 14, fontWeight: '300'},
});
