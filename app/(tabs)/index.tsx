// import {
//   Image,
//   StyleSheet,
//   View,
//   Text,
//   Animated,
//   ScrollView,
//   SafeAreaView,
//   TextInput,
//   TouchableOpacity,
//   Platform,
// } from 'react-native';

// import { useRef, useState } from 'react';
// import { Colors } from '@/constants/Colors';
// import { StatusBar } from 'expo-status-bar';
// import Constants from 'expo-constants';

// import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
// import { BlurView } from 'expo-blur';
// import { Header } from '@/components/ChatList/Header';
// import { router } from 'expo-router';
// import { interpolateColor, useAnimatedStyle } from 'react-native-reanimated';

// const headerHeight = 120;
// const items = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

// export default function HomeScreen() {
//   const [searchText, setSearchText] = useState('');

//   const bottomTabBarHeight = useBottomTabBarHeight();

//   const scrollY = useRef(new Animated.Value(0)).current;

//   // Animate the height of the second view
//   const secondViewHeight = scrollY.interpolate({
//     inputRange: [55, 150],
//     outputRange: [55, 0],
//     extrapolate: 'clamp',
//   });

//   // Animate the height of the second view
//   const thirdViewHeight = scrollY.interpolate({
//     inputRange: [0, 55],
//     outputRange: [55, 0],
//     extrapolate: 'clamp',
//   });

//   // Animate the translateY of the text to move it up as the view shrinks
//   const textTranslateY = scrollY.interpolate({
//     inputRange: [100, 200],
//     outputRange: [0, -100], // Adjust the value to match the height of the view
//     extrapolate: 'clamp',
//   });

//   const textInputHeight = scrollY.interpolate({
//     inputRange: [0, 40],
//     outputRange: [40, 0],
//     extrapolate: 'clamp',
//   });

//   // Animate the opacity of the text based on the height of the box
//   const textOpacity = scrollY.interpolate({
//     inputRange: [100, 200],
//     outputRange: [0, 1],
//     extrapolate: 'clamp',
//   });

//   // Interpolating the scroll value to map to color transitions
//   const backgroundColor = scrollY.interpolate({
//     inputRange: [10, 300], // Define scroll range
//     outputRange: [Colors.black, 'transparent'], // Color transition from red to blue
//     extrapolate: 'clamp', // Prevent values outside the range
//   });

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <StatusBar style="light" />
//       {/* Fixed header */}
//       <Header textOpacity={textOpacity} backgroundColor={backgroundColor} />

//       {/* Second View (Animated) */}
//       <Animated.View style={[styles.secondView, { height: secondViewHeight }]}>
//         <Animated.Text
//           style={[styles.text, { transform: [{ translateY: textTranslateY }] }]}
//         >
//           Chats
//         </Animated.Text>
//       </Animated.View>

//       {/* Third View (Animated) */}
//       {/* <Animated.View style={[styles.thirdView, { height: thirdViewHeight }]}>
//         <Animated.View
//           style={[styles.textInputContainer, { height: textInputHeight }]}
//         >
//           <TextInput
//             value={searchText}
//             onChangeText={(text) => setSearchText(text)}
//             style={{ width: '100%', height: '100%' }}
//           />
//         </Animated.View>
//       </Animated.View> */}

//       <Animated.ScrollView
//         contentContainerStyle={{
//           paddingTop: headerHeight / 1,
//           paddingBottom: bottomTabBarHeight,
//         }}
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { y: scrollY } } }],
//           { useNativeDriver: false },
//         )}
//         scrollEventThrottle={16}
//       >
//         {items.map((x) => (
//           <TouchableOpacity
//             style={styles.item}
//             key={x}
//             onPress={() => router.navigate('/chatRoom')}
//           >
//             <Image
//               style={styles.image}
//               source={{
//                 uri: 'https://i.ibb.co/YySxPQC/pro.jpeg',
//               }}
//             />
//             <View style={styles.detail}>
//               <Text style={styles.name}>Name</Text>
//               <Text style={styles.description}>Message..</Text>
//             </View>
//           </TouchableOpacity>
//         ))}
//       </Animated.ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   header: {
//     height: headerHeight,
//     width: '100%',
//     backgroundColor: Colors.black,
//   },
//   item: {
//     paddingHorizontal: 20,
//     paddingVertical: 15,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   image: {
//     height: 45,
//     width: 45,
//     borderRadius: 30,
//     backgroundColor: '#ccc',
//   },
//   detail: {
//     marginLeft: 10,
//   },
//   name: {
//     fontSize: 15,
//     color: Colors.white,
//     fontFamily: 'HelveticaNeueBold',
//   },
//   description: {
//     opacity: 0.7,
//     color: Colors.white,
//     fontFamily: 'HelveticaNeueRegular',
//     fontSize: 16,
//   },
//   text: {
//     color: 'white',
//     fontSize: 30,
//     fontFamily: 'HelveticaNeueBold',
//     paddingLeft: 20,
//   },
//   secondView: {
//     position: 'absolute',
//     top: Constants.statusBarHeight + 60,
//     left: 0,
//     right: 0,
//     backgroundColor: Colors.black,
//     // backgroundColor: 'green',
//     zIndex: 1,
//     overflow: 'hidden',
//     justifyContent: 'center',
//   },
//   thirdView: {
//     position: 'absolute',
//     top: 145,
//     left: 0,
//     right: 0,
//     backgroundColor: Colors.black,
//     zIndex: 1,
//     overflow: 'hidden',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   textInputContainer: {
//     width: '90%',
//     backgroundColor: Colors.lightGray,
//     borderRadius: 10,
//   },
// });

import React, { useState } from 'react';
import {
  SafeAreaView,
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
  const [blurIntensity, setBlurIntensity] = useState(0);

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
                <Text style={styles.name}>Name</Text>
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
