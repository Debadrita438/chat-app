/* eslint-disable prettier/prettier */
import { Platform, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import { BlurView } from 'expo-blur';
import Animated from 'react-native-reanimated';

import { Colors } from '@/constants/Colors';
import HorizontalDotIcon from '@/assets/svg/bottomTabs/horizontalDot.svg';
import PlusIcon from '@/assets/svg/bottomTabs/plus.svg';

interface IHeaderType {
  textOpacityStyle: {
    opacity: number;
  };
  backgroundColorStyle: {
    backgroundColor: string;
  };
  // blurIntensity: number;
  animatedProps: Partial<{
    intensity: number;
  }>;
}

export function Header(props: IHeaderType) {
  const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

  return (
    <Animated.View style={[styles.container, props.backgroundColorStyle]}>
      <AnimatedBlurView
        tint={'default'}
        style={{
          ...StyleSheet.absoluteFillObject,
          overflow: 'hidden',
          justifyContent: 'space-between',
          flexDirection: 'row',
          padding: 20,
          width: '100%',
          alignItems: 'flex-end',
        }}
        animatedProps={props.animatedProps}
      >
        <View style={styles.buttonContainer}>
          <HorizontalDotIcon fill={Colors.white} width={15} height={15} />
        </View>
        <Animated.Text style={[styles.headerText, props.textOpacityStyle]}>
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
      </AnimatedBlurView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
    // justifyContent: 'space-between',
    // flexDirection: 'row',
    width: '100%',
    height: Constants.statusBarHeight + 60,
    position: 'absolute',
    // top: Constants.statusBarHeight,
    zIndex: 1,
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
