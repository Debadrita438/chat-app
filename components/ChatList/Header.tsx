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
        style={styles.blurViewContainer}
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
    width: '100%',
    height: Constants.statusBarHeight + 60,
    position: 'absolute',
    zIndex: 1,
  },
  blurViewContainer: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20,
    width: '100%',
    alignItems: 'flex-end',
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
