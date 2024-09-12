import {
  FlatList,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useState } from 'react';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { BlurView } from 'expo-blur';

import { Colors } from '@/constants/Colors';
import BackIcon from '@/assets/svg/chatRoom/backArrow.svg';
import CallIcon from '@/assets/svg/chatRoom/call.svg';
import VideoCallIcon from '@/assets/svg/chatRoom/videoCall.svg';
import PlusIcon from '@/assets/svg/chatRoom/plus.svg';
import RupeeIcon from '@/assets/svg/chatRoom/rupee.svg';
import CameraIcon from '@/assets/svg/chatRoom/camera.svg';
import MicIcon from '@/assets/svg/chatRoom/mic.svg';
import GifIcon from '@/assets/svg/chatRoom/gif.svg';
import { Path, Svg } from 'react-native-svg';
import ChatBubble, { BubbleType } from '@/components/ChatRoom/ChatBubble';

export default function ChatRoom() {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      {/* header */}
      <View
        style={[
          {
            width: '100%',
            height: Constants.statusBarHeight + 50,
            position: 'absolute',
            zIndex: 1,
            backgroundColor: 'transparent',
          },
        ]}
      >
        <BlurView
          tint={'default'}
          style={{
            ...StyleSheet.absoluteFillObject,
            overflow: 'hidden',
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
            alignItems: 'flex-end',
          }}
          intensity={50}
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
      </View>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <>
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            inverted
            ListFooterComponent={() => (
              <View style={{ paddingTop: Constants.statusBarHeight + 90 }} />
            )}
            renderItem={({ item, index }) => (
              <ChatBubble
                bubbleType={index % 2 === 0 ? BubbleType.Own : BubbleType.Other}
              />
            )}
          />

          {/* bottom tab */}
          <View
            style={{
              justifyContent: 'flex-end',
              height: isKeyboardOpen ? 55 : 75,
              backgroundColor: Colors.bottomChatBarColor,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                height: '100%',
                alignItems: 'flex-start',
                paddingHorizontal: 10,
                paddingTop: 10,
                justifyContent: 'space-between',
              }}
            >
              <View
                style={{
                  height: 26,
                  width: 40,
                  justifyContent: 'center',
                }}
              >
                <PlusIcon width={32} height={32} fill={Colors.white} />
              </View>
              <View
                style={{
                  height: 32,
                  // width: '65%',
                  backgroundColor: Colors.textInputColor,
                  borderRadius: 20,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  paddingHorizontal: 5,
                  alignItems: 'center',
                  flex: 1,
                }}
              >
                <TextInput
                  style={{ height: '100%', width: '80%' }}
                  onFocus={() => setIsKeyboardOpen(true)}
                  onBlur={() => setIsKeyboardOpen(false)}
                />
                <GifIcon width={25} height={25} />
              </View>
              {/* <View
                style={{
                  height: 26,
                  width: 26,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'transparent',
                  borderColor: Colors.white,
                  borderRadius: 16,
                  borderWidth: 2,
                }}
              >
                <RupeeIcon fill={Colors.white} />
              </View> */}
              <View
                style={{
                  height: 26,
                  width: 45,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <CameraIcon fill={Colors.white} height={32} width={32} />
              </View>
              <View
                style={{
                  height: 26,
                  width: 35,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <MicIcon fill={Colors.white} height={28} width={28} />
              </View>
            </View>
          </View>
        </>
      </KeyboardAvoidingView>
    </View>
  );
}
