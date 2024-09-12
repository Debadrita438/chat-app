import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Path, Svg } from 'react-native-svg';

import { Colors } from '@/constants/Colors';

export enum BubbleType {
  Own,
  Other,
}

interface IChatBubbleProps {
  bubbleType: BubbleType;
}

export default function ChatBubble(props: IChatBubbleProps) {
  const tailPath =
    props.bubbleType === BubbleType.Own
      ? 'M48,35c-7-4-6-8.75-6-17.5C28,17.5,29,35,48,35z'
      : 'M38.484,17.5c0,8.75,1,13.5-6,17.5C51.484,35,52.484,17.5,38.484,17.5z';
  const transformTail =
    props.bubbleType === BubbleType.Own
      ? 'rotate(5 95 30)'
      : 'rotate(10 70 50)';

  return (
    <>
      <View
        style={
          props.bubbleType === BubbleType.Own
            ? styles.ownBubbleContainer
            : styles.otherBubbleContainer
        }
      >
        <Text
          style={{
            color: Colors.white,
            fontFamily: 'HelveticaNeueMedium',
            fontSize: 15,
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
        <Text style={{ alignSelf: 'flex-end', color: Colors.white }}>
          9:08 AM
        </Text>
      </View>

      <View
        style={{
          ...styles.tailMainContainer,
          ...(props.bubbleType === BubbleType.Own
            ? styles.tailOwnContainer
            : styles.tailOtherContainer),
        }}
      >
        <Svg
          width={20.64}
          height={23.79}
          viewBox="32.485 17.5 15.515 17.5"
          enable-background="new 32.485 17.5 15.515 17.5"
        >
          <Path
            d={tailPath}
            fill={
              props.bubbleType === BubbleType.Own
                ? Colors.chatBubbleGreen
                : Colors.chatBubbleGray
            }
            x="0"
            y="0"
            transform={transformTail}
          />
        </Svg>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  ownBubbleContainer: {
    backgroundColor: Colors.chatBubbleGreen,
    maxWidth: '80%',
    minWidth: 0,
    padding: 10,
    alignSelf: 'flex-end',
    marginBottom: 5,
    borderRadius: 15,
    marginRight: 15,
  },
  otherBubbleContainer: {
    backgroundColor: Colors.chatBubbleGray,
    maxWidth: '80%',
    minWidth: 0,
    padding: 10,
    alignSelf: 'flex-start',
    marginBottom: 5,
    borderRadius: 15,
    marginLeft: 15,
  },
  tailMainContainer: {
    position: 'absolute',
    bottom: -2,
    justifyContent: 'flex-end',
    top: 0,
    zIndex: -1,
  },
  tailOwnContainer: {
    left: 0,
    right: 8,
    alignItems: 'flex-end',
  },
  tailOtherContainer: {
    left: 0,
    right: 0,
    alignItems: 'flex-start',
  },
});
