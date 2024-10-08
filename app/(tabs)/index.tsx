import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolateColor,
  interpolate,
  useAnimatedProps,
} from 'react-native-reanimated';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import Constants from 'expo-constants';

import { Colors } from '@/constants/Colors';
import { Header } from '@/components/ChatList/Header';

const headerHeight = 120;
const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

export default function HomeScreen() {
  const [searchText, setSearchText] = useState('');

  const bottomTabBarHeight = useBottomTabBarHeight();

  // Reanimated shared value to track scroll position
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  // Second view height animation
  const secondViewStyle = useAnimatedStyle(() => {
    const height = interpolate(scrollY.value, [60, 100], [60, 0], 'clamp');
    return { height };
  });

  // Third view height animation
  const thirdViewStyle = useAnimatedStyle(() => {
    const height = interpolate(scrollY.value, [0, 60], [60, 0], 'clamp');
    return { height };
  });

  // Text translateY animation
  const textTranslateYStyle = useAnimatedStyle(() => {
    const translateY = interpolate(scrollY.value, [60, 230], [0, -90], 'clamp');
    return { transform: [{ translateY }] };
  });

  // Text input height animation
  const textInputStyle = useAnimatedStyle(() => {
    const height = interpolate(scrollY.value, [0, 40], [40, 0], 'clamp');
    return { height };
  });

  // Text opacity animation
  const textOpacityStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scrollY.value, [89, 90], [0, 1], 'clamp');
    return { opacity };
  });

  // Background color interpolation
  const backgroundColorStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      scrollY.value,
      [10, 300],
      [Colors.black, 'transparent'],
    );
    return { backgroundColor };
  });

  const animatedProps = useAnimatedProps(() => {
    const intensity = interpolate(
      scrollY.value,
      [90, 91, 100],
      [0, 40, 50],
      'clamp',
    );

    return {
      intensity,
    };
  });

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />

      {/* Fixed header */}
      <Header
        textOpacityStyle={textOpacityStyle}
        backgroundColorStyle={backgroundColorStyle}
        animatedProps={animatedProps}
      />

      {/* Second View (Animated) */}
      <Animated.View style={[styles.secondView, secondViewStyle]}>
        <Animated.Text style={[styles.text, textTranslateYStyle]}>
          Chats
        </Animated.Text>
      </Animated.View>

      {/* Third View (Animated) */}
      <Animated.View style={[styles.thirdView, thirdViewStyle]}>
        <Animated.View style={[styles.textInputContainer, textInputStyle]}>
          <TextInput
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
            style={{ width: '100%', height: '100%' }}
          />
        </Animated.View>
      </Animated.View>

      <Animated.ScrollView
        contentContainerStyle={{
          paddingTop: Constants.statusBarHeight + 175,
          paddingBottom: bottomTabBarHeight,
        }}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        {items.map((x) => (
          <TouchableOpacity
            style={{
              height: 80,
              width: '100%',
              justifyContent: 'space-between',
            }}
            key={x}
            onPress={() => router.navigate('/chatRoom')}
          >
            <View style={styles.item}>
              <Image
                style={styles.image}
                source={{
                  uri: 'https://i.ibb.co/YySxPQC/pro.jpeg',
                }}
              />
              <View style={styles.detail}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <Text style={styles.name}>Name</Text>
                  <Text style={styles.description}>Yesterday</Text>
                </View>
                <Text style={styles.description}>Message..</Text>
              </View>
            </View>
            <View
              style={{
                borderBottomColor: Colors.borderBottomColor,
                borderBottomWidth: 1,
                width: '100%',
                marginLeft: 90,
              }}
            />
          </TouchableOpacity>
        ))}
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: headerHeight,
    width: '100%',
    backgroundColor: Colors.black,
  },
  item: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    height: '90%',
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: '#ccc',
  },
  detail: {
    marginLeft: 10,
    height: '90%',
    width: '80%',
    alignSelf: 'flex-start',
  },
  name: {
    fontSize: 15,
    color: Colors.white,
    fontFamily: 'HelveticaNeueBold',
  },
  description: {
    opacity: 0.7,
    color: Colors.white,
    fontFamily: 'HelveticaNeueRegular',
    fontSize: 16,
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'HelveticaNeueBold',
    paddingLeft: 20,
  },
  secondView: {
    position: 'absolute',
    top: Constants.statusBarHeight + 60,
    left: 0,
    right: 0,
    backgroundColor: Colors.black,
    zIndex: 1,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  thirdView: {
    position: 'absolute',
    top: Constants.statusBarHeight + 120,
    left: 0,
    right: 0,
    backgroundColor: Colors.black,
    zIndex: 1,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputContainer: {
    width: '90%',
    backgroundColor: Colors.lightGray,
    borderRadius: 10,
  },
});
