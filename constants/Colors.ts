/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
  white: tintColorDark,
  black: '#000000',
  gray: '#222222',
  green: '#22bf62',
  lightGray: '#222',
  borderBottomColor: '#222',
  bottomChatBarColor: '#232625',
  textInputColor: '#3b3b3b',
  chatBubbleGreen: '#144d38',
  chatBubbleGray: '#232627',
  blurBlack: '#000000c0',
  hyperlinkGreen: '#217b51',
  ownBubbleTimeGreen: '#89b2a2',
  otherBubbleTimeGray: '#8d8e90',
  darkGreen: '#0f3e2d',
  darkGray: '#1b1e1d',
};
