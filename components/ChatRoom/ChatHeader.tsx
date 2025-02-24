import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import React from 'react';

import { BlurView } from 'expo-blur';
import { BackIcon, CallIcon, VideoCallIcon } from '@/assets/svg';
import { Colors } from '@/constants/Colors';
import { router } from 'expo-router';
import { styles } from './ChatHeaderStyles';
import { Normalize } from '@/constants/Normalize';

const ChatHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <BlurView tint={'default'} style={styles.blurView} intensity={50}>
        <Pressable style={styles.backIconContainer} onPress={router.back}>
          <BackIcon fill={Colors.white} />
        </Pressable>
        <View style={styles.outerContainer}>
          <View style={styles.innerContainer}>
            <View style={styles.profileImageContainer}>
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
                fontSize: Normalize(10),
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
    </View>
  );
};

export default ChatHeader;
