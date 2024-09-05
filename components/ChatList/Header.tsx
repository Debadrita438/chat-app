import { Animated, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

import { Colors } from '@/constants/Colors';
import HorizontalDotIcon from '@/assets/svg/bottomTabs/horizontalDot.svg';
import PlusIcon from '@/assets/svg/bottomTabs/plus.svg';

interface IHeaderType {
  textOpacity: Animated.AnimatedInterpolation<string | number>;
}

export function Header(props: IHeaderType) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <HorizontalDotIcon fill={Colors.white} width={15} height={15} />
      </View>
      <Animated.Text
        style={[styles.headerText, { opacity: props.textOpacity }]}
      >
        Chat
      </Animated.Text>
      <View>
        <View
          style={{
            ...styles.buttonContainer,
            backgroundColor: Colors.green,
          }}
        >
          <PlusIcon fill={Colors.black} width={15} height={15} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20,
    backgroundColor: Colors.black,
    width: '100%',
    height: 60,
  },
  buttonContainer: {
    height: 25,
    width: 25,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.gray,
  },
  headerText: {
    color: Colors.white,
    fontFamily: 'HelveticaNeueMedium',
  },
});
