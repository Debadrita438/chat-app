import { Image, SafeAreaView, Text, View } from 'react-native';
import Constants from 'expo-constants';

import { Colors } from '@/constants/Colors';
import BackIcon from '@/assets/svg/chatRoom/backArrow.svg';
import CallIcon from '@/assets/svg/chatRoom/call.svg';
import VideoCallIcon from '@/assets/svg/chatRoom/videoCall.svg';

export default function ChatRoom() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* header */}
      <View
        style={{
          width: '100%',
          height: 50,
          marginTop: Constants.statusBarHeight,
          padding: 10,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <BackIcon fill={Colors.white} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '87%',
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
              style={{ color: Colors.white, fontFamily: 'HelveticaNeueMedium' }}
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
      </View>
    </SafeAreaView>
  );
}
