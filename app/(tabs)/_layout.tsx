import { Tabs } from 'expo-router';
import React from 'react';

// import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
// import TabChatIcon from '@/assets/svg/bottomTabs/TabChatIcon';
import ChatIcon from '@/assets/svg/bottomTabs/chat.svg';
import { Platform, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          elevation: 0,
        },
        tabBarBackground: () => (
          <BlurView
            intensity={Platform.OS === 'ios' ? 60 : 100}
            tint={'default'}
            style={{
              ...StyleSheet.absoluteFillObject,
              overflow: 'hidden',
              backgroundColor: 'transparent',
            }}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Chat',
          tabBarIcon: ({ color, focused }) => (
            <ChatIcon fill={focused ? Colors.white : Colors.black} />
          ),
        }}
      />
      {/* <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'code-slash' : 'code-slash-outline'}
              color={color}
            />
          ),
        }}
      /> */}
    </Tabs>
  );
}
