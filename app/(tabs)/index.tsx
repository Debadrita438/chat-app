import {
  Image,
  StyleSheet,
  View,
  Text,
  Animated,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { useRef, useState } from 'react';
import { Colors } from '@/constants/Colors';
import { StatusBar } from 'expo-status-bar';

import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import { Header } from '@/components/ChatList/Header';
import { router } from 'expo-router';

const headerHeight = 120;
const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

export default function HomeScreen() {
  const [searchText, setSearchText] = useState('');

  const bottomTabBarHeight = useBottomTabBarHeight();

  const scrollY = useRef(new Animated.Value(0)).current;

  // Animate the height of the second view
  const secondViewHeight = scrollY.interpolate({
    inputRange: [50, 150],
    outputRange: [50, 0],
    extrapolate: 'clamp',
  });

  // Animate the height of the second view
  const thirdViewHeight = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [50, 0],
    extrapolate: 'clamp',
  });

  // Animate the translateY of the text to move it up as the view shrinks
  const textTranslateY = scrollY.interpolate({
    inputRange: [100, 200],
    outputRange: [0, -100], // Adjust the value to match the height of the view
    extrapolate: 'clamp',
  });

  const textInputHeight = scrollY.interpolate({
    inputRange: [0, 40],
    outputRange: [40, 0],
    extrapolate: 'clamp',
  });

  // Animate the opacity of the text based on the height of the box
  const textOpacity = scrollY.interpolate({
    inputRange: [100, 200],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="light" />
      {/* Fixed header */}
      <Header textOpacity={textOpacity} />

      {/* Second View (Animated) */}
      <Animated.View style={[styles.secondView, { height: secondViewHeight }]}>
        <Animated.Text
          style={[styles.text, { transform: [{ translateY: textTranslateY }] }]}
        >
          Chats
        </Animated.Text>
      </Animated.View>

      {/* Third View (Animated) */}
      <Animated.View style={[styles.thirdView, { height: thirdViewHeight }]}>
        {/* Text Input */}
        <Animated.View
          style={[styles.textInputContainer, { height: textInputHeight }]}
        >
          <TextInput
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
            style={{ width: '100%', height: '100%' }}
          />
        </Animated.View>
      </Animated.View>

      <ScrollView
        contentContainerStyle={{
          paddingTop: headerHeight / 1,
          paddingBottom: bottomTabBarHeight,
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={16}
      >
        {items.map((x) => (
          <TouchableOpacity
            style={styles.item}
            key={x}
            onPress={() => router.navigate('/chatRoom')}
          >
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
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
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
    alignItems: 'center',
  },
  image: {
    height: 45,
    width: 45,
    borderRadius: 30,
    backgroundColor: '#ccc',
  },
  detail: {
    marginLeft: 10,
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
    top: 95,
    left: 0,
    right: 0,
    backgroundColor: Colors.black,
    zIndex: 1,
    overflow: 'hidden',
  },
  thirdView: {
    position: 'absolute',
    top: 145,
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
