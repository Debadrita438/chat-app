import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: Constants.statusBarHeight + 50,
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'transparent',
  },
  blurView: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-end',
  },
  backIconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  outerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '87%',
    alignItems: 'center',
  },
  innerContainer: {
    maxWidth: '60%',
    minWidth: '30%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 50,
    alignItems: 'center',
  },
  profileImageContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    overflow: 'hidden',
  },
});
