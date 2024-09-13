import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { Path, Svg } from 'react-native-svg';

import { Colors } from '@/constants/Colors';

export enum BubbleType {
  Own,
  Other,
}

interface IChatBubbleProps {
  bubbleType: BubbleType;
  message: string;
}

export default function ChatBubble(props: IChatBubbleProps) {
  const [isOneLine, setIsOneLine] = useState(false);

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
        <View
          style={
            isOneLine
              ? { paddingRight: 25, flexDirection: 'row' }
              : { flexDirection: 'column' }
          }
          onLayout={(e) => {
            let { height, width } = e.nativeEvent.layout;

            if (height < 20 && width <= 143) {
              setIsOneLine(true);
            } else {
              setIsOneLine(false);
            }
          }}
        >
          <Text
            style={{
              color: Colors.white,
              fontFamily: 'HelveticaNeueRegular',
              marginRight: 10,
            }}
          >
            {props.message}
          </Text>
        </View>
        <Text
          style={{
            alignSelf: 'flex-end',
            color: Colors.white,
            fontFamily: 'HelveticaNeueRegular',
            fontSize: 12,
            marginTop: isOneLine ? -10 : 2,
            marginLeft: isOneLine ? 40 : 2,
          }}
        >
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
    maxWidth: '70%',
    minWidth: 0,
    padding: 10,
    alignSelf: 'flex-end',
    marginBottom: 5,
    borderRadius: 15,
    marginRight: 15,
  },
  otherBubbleContainer: {
    backgroundColor: Colors.chatBubbleGray,
    maxWidth: '70%',
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
