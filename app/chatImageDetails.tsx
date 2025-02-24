import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { BlurView } from 'expo-blur';

import { BackIcon } from '@/assets/svg';
import { Colors } from '@/constants/Colors';
import { router, useLocalSearchParams } from 'expo-router';
import { IImageListProps } from '@/components/Types';
import { Normalize } from '@/constants/Normalize';

const ChatImageDetails = () => {
  const response = useLocalSearchParams<{ imageList: string }>();
  const imageList: IImageListProps[] = JSON.parse(response.imageList);

  const [imageSize, setImageSize] = useState<
    {
      width: number;
      height: number;
      id: number;
      url: string;
    }[]
  >([]);

  useEffect(() => {
    let sizes: {
      width: number;
      height: number;
      id: number;
    }[] = [];
    const fetchImageSizes = async () => {
      sizes = await Promise.all(
        imageList.map((img) => {
          return new Promise((resolve) => {
            Image.getSize(
              img.url,
              (width, height) =>
                resolve({ width, height, id: img.id, url: img.url }),
              (error) =>
                resolve({ width: 0, height: 0, id: img.id, url: img.url }),
            );
          });
        }),
      );

      setImageSize(sizes);
    };

    fetchImageSizes();
  }, [imageList]);

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
              <Text style={{ color: 'white' }}>3 dots</Text>
            </View>
          </View>
        </BlurView>
      </View>

      {imageSize && imageSize.length > 0 && (
        <FlatList
          data={imageSize}
          renderItem={({ item }) => (
            <View
              style={{
                width: Dimensions.get('screen').width,
                height:
                  item.height > item.width ? Normalize(350) : Normalize(250),
                marginBottom: Normalize(15),
              }}
            >
              <Image
                source={{ uri: item.url }}
                style={{ width: '100%', height: '100%' }}
                resizeMode={'cover'}
              />
            </View>
          )}
          ListHeaderComponent={() => (
            <View style={{ paddingTop: Constants.statusBarHeight + 60 }} />
          )}
        />
      )}
    </View>
  );
};

export default ChatImageDetails;
