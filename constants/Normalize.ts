import { PixelRatio, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const scale = (width > height ? height : width) / 320;

export const Normalize = (size: number) => {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export const iPadRefDimensions = {
  width: 810,
  height: 1080,
};
const defaultHeight = height <= 812 ? 667 : 812;
const isPortrait = height < height;
export const defaultDimensions = {
  width: isPortrait ? 375 : defaultHeight,
  height: isPortrait ? defaultHeight : 375,
};
const widthRatio = width / defaultDimensions.width;
const heightRatio = height / defaultDimensions.height;
const meanRatio = (widthRatio + heightRatio) / 2;
const scaleDiff = 0.3;

export const rpx = (pixels: number) => {
  const scale = (meanRatio - 1) * scaleDiff + 1;
  return PixelRatio.roundToNearestPixel(pixels * scale);
};
