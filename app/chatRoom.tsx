import React from 'react';
import {
  FlatList,
  Image,
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
import {
  BackIcon,
  CallIcon,
  CameraIcon,
  GifIcon,
  MicIcon,
  PlusIcon,
  VideoCallIcon,
} from '@/assets/svg';
import ChatBubble from '@/components/ChatRoom/ChatBubble';

export default function ChatRoom() {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  let messageList = [
    {
      id: 13,
      message: 'https://docs.expo.dev/guides/linking/',
      image: [],
      time: new Date(),
      userId: 1,
    },
    {
      id: 12,
      message: '',
      image: [
        {
          id: 1,
          url: 'QA Report of Sports Production Build.docx',
          type: 'doc',
          size: '70 KB',
        },
      ],
      time: new Date(),
      userId: 1,
    },
    {
      id: 11,
      message: '',
      image: [
        {
          id: 1,
          url: 'QA Report of Sports Production Build.docx',
          type: 'doc',
          size: '70 KB',
        },
      ],
      time: new Date(),
      userId: 2,
    },
    {
      id: 10,
      message:
        'Look at this - https://docs.expo.dev/guides/linking/ this link describes linking',
      image: [],
      time: new Date(),
      userId: 1,
    },
    {
      id: 9,
      message: '',
      image: [
        {
          id: 1,
          url: 'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=600',
          type: 'image',
        },
        {
          id: 2,
          url: 'https://img.freepik.com/free-photo/front-view-unknown-man-posing-studio_23-2149417570.jpg?w=740&t=st=1726742068~exp=1726742668~hmac=ed1c5c1a876b45bd1a90f564926d450b576a2af7ab18349808e35007f3e4ac5e',
          type: 'image',
        },
        {
          id: 3,
          url: 'https://img.freepik.com/free-photo/front-view-unknown-man-posing-studio_23-2149417570.jpg?w=740&t=st=1726742068~exp=1726742668~hmac=ed1c5c1a876b45bd1a90f564926d450b576a2af7ab18349808e35007f3e4ac5e',
          type: 'image',
        },
        {
          id: 4,
          url: 'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=600',
          type: 'image',
        },
        {
          id: 5,
          url: 'https://img.freepik.com/free-photo/front-view-unknown-man-posing-studio_23-2149417570.jpg?w=740&t=st=1726742068~exp=1726742668~hmac=ed1c5c1a876b45bd1a90f564926d450b576a2af7ab18349808e35007f3e4ac5e',
          type: 'image',
        },
      ],
      time: new Date(),
      userId: 1,
    },
    {
      id: 8,
      message: '',
      image: [
        {
          id: 1,
          url: 'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=600',
          type: 'image',
        },
        {
          id: 2,
          url: 'https://img.freepik.com/free-photo/front-view-unknown-man-posing-studio_23-2149417570.jpg?w=740&t=st=1726742068~exp=1726742668~hmac=ed1c5c1a876b45bd1a90f564926d450b576a2af7ab18349808e35007f3e4ac5e',
          type: 'image',
        },
        {
          id: 3,
          url: 'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=600',
          type: 'image',
        },
        {
          id: 4,
          url: 'https://img.freepik.com/free-photo/front-view-unknown-man-posing-studio_23-2149417570.jpg?w=740&t=st=1726742068~exp=1726742668~hmac=ed1c5c1a876b45bd1a90f564926d450b576a2af7ab18349808e35007f3e4ac5e',
          type: 'image',
        },
      ],
      time: new Date(),
      userId: 2,
    },
    {
      id: 7,
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: [],
      time: new Date(),
      userId: 1,
    },
    {
      id: 6,
      message: 'Test1',
      image: [],
      time: new Date(),
      userId: 1,
    },
    {
      id: 5,
      message: '12345678',
      image: [],
      time: new Date(),
      userId: 1,
    },
    {
      id: 4,
      message: '12345678',
      image: [],
      time: new Date(),
      userId: 2,
    },
    {
      id: 3,
      message: '1234567891011',
      image: [],
      time: new Date(),
      userId: 2,
    },
    {
      id: 2,
      message: '',
      image: [
        {
          id: 1,
          url: 'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=600',
          type: 'image',
        },
        {
          id: 2,
          url: 'https://img.freepik.com/free-photo/front-view-unknown-man-posing-studio_23-2149417570.jpg?w=740&t=st=1726742068~exp=1726742668~hmac=ed1c5c1a876b45bd1a90f564926d450b576a2af7ab18349808e35007f3e4ac5e',
          type: 'image',
        },
      ],
      time: new Date(),
      userId: 2,
    },
    {
      id: 1,
      message: '',
      image: [
        {
          id: 1,
          url: 'https://img.freepik.com/free-photo/front-view-unknown-man-posing-studio_23-2149417570.jpg?w=740&t=st=1726742068~exp=1726742668~hmac=ed1c5c1a876b45bd1a90f564926d450b576a2af7ab18349808e35007f3e4ac5e',
          type: 'image',
        },
      ],
      time: new Date(),
      userId: 1,
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      {/* header */}

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <>
          <FlatList
            data={messageList}
            inverted
            ListFooterComponent={() => (
              <View style={{ paddingTop: Constants.statusBarHeight + 90 }} />
            )}
            renderItem={({ item, index }) => {
              let addTail = false;
              if (messageList[index - 1]?.userId) {
                addTail = item.userId !== messageList[index - 1].userId;
              } else {
                addTail = true;
              }

              return <ChatBubble key={index} item={item} addTail={addTail} />;
            }}
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
