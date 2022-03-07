import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  topBar: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  topBarTitle: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  sectionView: {
    flexDirection: 'row',
    padding: 20,
  },
  sectionTitleView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  sectionTitle: {color: '#fff', fontWeight: '500', fontSize: 18},
  touchableView: {justifyContent: 'center', alignItems: 'center'},
  seeAllText: {color: '#fff', fontWeight: '400', fontSize: 12},
});
