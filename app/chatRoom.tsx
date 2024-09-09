import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { BlurView } from 'expo-blur';

import { Colors } from '@/constants/Colors';
import BackIcon from '@/assets/svg/chatRoom/backArrow.svg';
import CallIcon from '@/assets/svg/chatRoom/call.svg';
import VideoCallIcon from '@/assets/svg/chatRoom/videoCall.svg';

export default function ChatRoom() {
  const scrollY = useSharedValue(0);

  // const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

  // Background color interpolation
  const backgroundColorStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      scrollY.value,
      [10, 300],
      [Colors.black, 'transparent'],
    );
    return { backgroundColor };
  });

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      {/* header */}
      <Animated.View
        style={[
          {
            width: '100%',
            height: Constants.statusBarHeight + 60,
            position: 'absolute',
            zIndex: 1,
          },
          backgroundColorStyle,
        ]}
      >
        <BlurView
          tint={'default'}
          style={{
            ...StyleSheet.absoluteFillObject,
            overflow: 'hidden',
            justifyContent: 'space-between',
            flexDirection: 'row',
            // padding: 20,
            width: '100%',
            alignItems: 'flex-end',
          }}
        >
          <Pressable
            style={{
              width: 40,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 5,
            }}
            onPress={router.back}
          >
            <BackIcon fill={Colors.white} />
          </Pressable>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '87%',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                maxWidth: '60%',
                minWidth: '30%',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                height: 50,
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  overflow: 'hidden',
                }}
              >
                <Image
                  style={{ width: '100%', height: '100%' }}
                  source={{
                    uri: 'https://i.ibb.co/YySxPQC/pro.jpeg',
                  }}
                />
              </View>
              <Text
                style={{
                  color: Colors.white,
                  fontFamily: 'HelveticaNeueMedium',
                }}
              >
                Jhon Doe
              </Text>
            </View>
            <View
              style={{
                width: '25%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 50,
                paddingHorizontal: 10,
              }}
            >
              <VideoCallIcon width={25} height={25} fill={Colors.white} />
              <CallIcon width={22} height={22} fill={Colors.white} />
            </View>
          </View>
        </BlurView>
      </Animated.View>
    </View>
  );
}
