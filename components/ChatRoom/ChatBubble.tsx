/* eslint-disable prettier/prettier */
import React, { Fragment, useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ImageBackground,
  Linking,
} from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';

import { Colors } from '@/constants/Colors';
import { styles } from './ChatBubbleStyles';
import { IChatBubbleProps } from '../Types';
import DocumentIcon from '@/assets/svg/chatRoom/document.svg';

const userId = 1;

export default function ChatBubble(props: IChatBubbleProps) {
  const [imageSize, setImageSize] = useState<
    {
      width: number;
      height: number;
      id: number;
    }[]
  >([]);

  const tailPath =
    props.item.userId === userId
      ? 'M48,35c-7-4-6-8.75-6-17.5C28,17.5,29,35,48,35z'
      : 'M38.484,17.5c0,8.75,1,13.5-6,17.5C51.484,35,52.484,17.5,38.484,17.5z';
  const transformTail =
    props.item.userId === userId ? 'rotate(6 130 30)' : 'rotate(5 160 110)';

  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = props.item.message.split(urlRegex);

  useEffect(() => {
    let sizes: {
      width: number;
      height: number;
      id: number;
    }[] = [];
    const fetchImageSizes = async () => {
      sizes = await Promise.all(
        props.item.image.map((img) => {
          return new Promise((resolve) => {
            Image.getSize(
              img.url,
              (width, height) => resolve({ width, height, id: img.id }),
              (error) => resolve({ width: 0, height: 0, id: img.id }),
            );
          });
        }),
      );
      setImageSize(sizes);
    };
    fetchImageSizes();
  }, [props.item]);

  const renderTail = () => {
    return (
      <View
        style={{
          ...styles.tailMainContainer,
          ...(props.item.userId === userId
            ? styles.tailOwnContainer
            : styles.tailOtherContainer),
        }}
      >
        {props.addTail && (
          <Svg
            width={20.64}
            height={23.79}
            viewBox="32.485 17.5 15.515 17.5"
            enable-background="new 32.485 17.5 15.515 17.5"
          >
            <Path
              d={tailPath}
              fill={
                props.item.userId === userId
                  ? Colors.chatBubbleGreen
                  : Colors.chatBubbleGray
              }
              x="0"
              y="0"
              transform={transformTail}
            />
          </Svg>
        )}
      </View>
    );
  };

  const renderImages = () => {
    const maxHeight = Dimensions.get('screen').height * 0.4; // Set your max height here

    return props.item.image.map((img) => {
      const size = imageSize.find((s) => s.id === img.id);
      if (!size) return null;

      const aspectRatio = size.width / size.height;
      const isHorizontal = aspectRatio > 1;
      const maxWidth = isHorizontal
        ? Dimensions.get('screen').width * 0.65
        : Dimensions.get('screen').width * 1;

      const width = isHorizontal ? maxWidth : maxWidth * aspectRatio;
      const height = isHorizontal ? maxHeight / aspectRatio : maxHeight;

      return (
        <Fragment key={img.id}>
          <View
            style={
              props.item.userId === userId
                ? [
                    styles.ownBubbleContainer,
                    {
                      marginBottom: !props.addTail ? 5 : 12,
                      padding: props.item.image.length > 0 ? 5 : 10,
                    },
                  ]
                : [
                    styles.otherBubbleContainer,
                    {
                      marginBottom: !props.addTail ? 5 : 12,
                      padding: props.item.image.length > 0 ? 5 : 10,
                    },
                  ]
            }
          >
            <Image
              source={{ uri: img.url }}
              style={{ width, height, borderRadius: 15 }}
              resizeMode={'cover'}
            />
            <LinearGradient
              colors={['rgba(0,0,0,0.8)', 'transparent']}
              start={{ x: 1, y: 1 }} // Start from bottom right corner
              end={{ x: 0.9, y: 0.8 }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: 15,
                zIndex: 1, // Make sure it overlays the image
              }}
            />
            <View style={styles.timeStampContainer}>
              <Text style={styles.timeStampText}>9:08 AM</Text>
            </View>
          </View>
          {renderTail()}
        </Fragment>
      );
    });
  };

  const renderMultiImages = () => {
    return (
      <>
        <View
          style={
            props.item.userId === userId
              ? {
                  marginBottom: !props.addTail ? 5 : 12,
                  ...styles.renderMultiOwnBubble,
                }
              : {
                  marginBottom: !props.addTail ? 5 : 12,
                  ...styles.renderMultiOtherBubble,
                }
          }
        >
          {props.item.image.slice(0, 4).map((im, i) => (
            <View
              key={i}
              style={{
                ...styles.multiImageContainer,
                marginBottom:
                  i === 0 || i === 1 ? 6 : i === 2 || i === 3 ? 2 : 0,
                marginTop: i === 0 || i === 1 ? 2 : 0,
                marginRight: i === 0 || i === 2 ? 3 : 0,
              }}
            >
              <ImageBackground
                source={{ uri: im.url }}
                style={styles.multiImageStyle}
                resizeMode={'cover'}
                blurRadius={i === 3 && props.item.image.length > 4 ? 10 : 1}
              >
                {i === 3 && props.item.image.length > 4 && (
                  <Text style={styles.countText}>
                    +{props.item.image.length - 3}
                  </Text>
                )}
              </ImageBackground>
              {i === 3 && props.item.image.length > 4 ? null : (
                <View style={styles.timeStampContainer}>
                  <Text style={styles.timeStampText}>9:08 AM</Text>
                </View>
              )}
            </View>
          ))}
        </View>
        {renderTail()}
      </>
    );
  };

  const handleLinkPress = (link: string) => {
    Linking.openURL(link);
  };

  const renderMessage = () => {
    return (
      <Text style={styles.messageText}>
        {parts.map((part, index) => {
          if (urlRegex.test(part)) {
            return (
              <Text
                key={index}
                style={styles.linkTextStyle}
                onPress={() => handleLinkPress(part)}
              >
                {part}
              </Text>
            );
          }
          return <Text key={index}>{part}</Text>;
        })}
        <Text style={{ color: 'transparent' }}>{' ' + '______'}</Text>
      </Text>
    );
  };

  const renderDocument = () => {
    return props.item.image.map((img) => {
      return (
        <Fragment key={img.id}>
          <View
            style={
              props.item.userId === userId
                ? [
                    styles.ownBubbleContainer,
                    {
                      marginBottom: !props.addTail ? 5 : 12,
                      padding: props.item.image.length > 0 ? 5 : 10,
                    },
                  ]
                : [
                    styles.otherBubbleContainer,
                    {
                      marginBottom: !props.addTail ? 5 : 12,
                      padding: props.item.image.length > 0 ? 5 : 10,
                    },
                  ]
            }
          >
            <View
              style={{
                backgroundColor:
                  props.item.userId === userId
                    ? Colors.darkGreen
                    : Colors.darkGray,
                ...styles.documentContainer,
              }}
            >
              <DocumentIcon />
              <View style={{ width: '85%' }}>
                <Text style={styles.documentName}>{img.url}</Text>
                <View style={styles.fileMetaInfoContainer}>
                  <Text
                    style={{
                      ...styles.fileSizeTypeText,
                      color:
                        props.item.userId === userId
                          ? Colors.ownBubbleTimeGreen
                          : Colors.otherBubbleTimeGray,
                    }}
                  >
                    {img.size}
                  </Text>
                  <Text
                    style={{
                      ...styles.separateText,
                      color:
                        props.item.userId === userId
                          ? Colors.ownBubbleTimeGreen
                          : Colors.otherBubbleTimeGray,
                    }}
                  >
                    •
                  </Text>
                  <Text
                    style={{
                      ...styles.fileSizeTypeText,
                      color:
                        props.item.userId === userId
                          ? Colors.ownBubbleTimeGreen
                          : Colors.otherBubbleTimeGray,
                    }}
                  >
                    {img.url.split('.')[1]}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.documentTimeContainer}>
              <Text
                style={[
                  styles.timeStampText,
                  {
                    color:
                      props.item.userId === userId
                        ? Colors.ownBubbleTimeGreen
                        : Colors.otherBubbleTimeGray,
                  },
                ]}
              >
                9:08 AM
              </Text>
            </View>
          </View>
          {renderTail()}
        </Fragment>
      );
    });
  };

  return (
    <>
      {props.item.image.length > 0 &&
      props.item.image[0]?.type === 'image' &&
      imageSize.length < 4 ? (
        renderImages()
      ) : props.item.image.length >= 4 &&
        props.item.image[0]?.type === 'image' ? (
        renderMultiImages()
      ) : props.item.image[0]?.type === 'doc' ? (
        renderDocument()
      ) : (
        <>
          <View
            style={
              props.item.userId === userId
                ? [
                    styles.ownBubbleContainer,
                    {
                      marginBottom: !props.addTail ? 5 : 12,
                      padding: props.item.image.length > 0 ? 5 : 10,
                    },
                  ]
                : [
                    styles.otherBubbleContainer,
                    {
                      marginBottom: !props.addTail ? 5 : 12,
                      padding: props.item.image.length > 0 ? 5 : 10,
                    },
                  ]
            }
          >
            {renderMessage()}
            <View style={styles.timeStampContainer}>
              <Text
                style={[
                  styles.timeStampText,
                  {
                    color:
                      props.item.userId === userId
                        ? Colors.ownBubbleTimeGreen
                        : Colors.otherBubbleTimeGray,
                  },
                ]}
              >
                9:08 AM
              </Text>
            </View>
          </View>

          {renderTail()}
        </>
      )}
    </>
  );
}
