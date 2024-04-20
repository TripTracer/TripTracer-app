import { ReactNode } from 'react';
import {
  Animated,
  ColorValue,
  GestureResponderEvent,
  ImageProps,
  ImageSourcePropType,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import { TextRef } from 'react-native-paper/lib/typescript/components/Typography/Text';
import { ThemeProp } from 'react-native-paper/lib/typescript/types';

import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootTabParamList = {
  Home: undefined;
  SettingsStack: NavigatorScreenParams<SettingsStackParamList>;
};

export type SettingsStackParamList = {
  Settings: undefined;
  Details: undefined;
};

export type HomeScreenNavigationProps = NativeStackScreenProps<
  RootTabParamList,
  'Home'
>;
export type SettingsScreenNavigationProps = NativeStackScreenProps<
  SettingsStackParamList,
  'Settings'
>;

export type AppBarProps = {
  children: ReactNode;
  dark?: boolean;
  mode?: 'small' | 'medium' | 'large' | 'center-aligned';
  elevated?: boolean;
  safeAreaInsets?: {
    bottom?: number;
    top?: number;
    left?: number;
    right?: number;
  };
  theme?: ThemeProp;
  style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
  testID?: string;
};

export type ActionProps = {
  color?: string;
  rippleColor?: ColorValue;
  icon: IconSource;
  size?: number;
  disabled?: boolean;
  accessibilityLabel?: string;
  onPress?: () => void;
  isLeading?: boolean;
  style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
  theme?: ThemeProp;
  testID?: string;
};

export type BackActionProps = {
  color?: string;
  size?: number;
  disabled?: boolean;
  accessibilityLabel?: string;
  onPress?: (e: GestureResponderEvent) => void;
  style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
  testID?: string;
};

export type ContentProps = {
  title: ReactNode & string;
  titleStyle?: StyleProp<TextStyle>;
  titleRef?: React.RefObject<TextRef>;
  onPress?: (e: GestureResponderEvent) => void;
  disabled?: boolean;
  color?: string;
  titleMaxFontSizeMultiplier?: number;
  style?: StyleProp<ViewStyle>;
  theme?: ThemeProp;
  testID?: string;
};
export type HeaderProps = {
  children: ReactNode;
  dark?: boolean;
  statusBarHeight?: number;
  mode?: 'small' | 'medium' | 'large' | 'center-aligned';
  elevated?: boolean;
  theme?: ThemeProp;
  style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
  testID?: string;
};

export type AvatarIconProps = {
  icon: IconSource;
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
  theme?: ThemeProp;
  testID?: string;
};

export type AvatarImageProps = {
  source: ImageSourcePropType | ((props: { size: number }) => React.ReactNode);
  size?: number;
  style?: StyleProp<ViewStyle>;
  onError?: ImageProps['onError'];
  onLayout?: ImageProps['onLayout'];
  onLoad?: ImageProps['onLoad'];
  onLoadEnd?: ImageProps['onLoadEnd'];
  onLoadStart?: ImageProps['onLoadStart'];
  onProgress?: ImageProps['onProgress'];
  theme?: ThemeProp;
  testID?: string;
};

export type AvatarTextProps = {
  label: string;
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  maxFontSizeMultiplier?: number;
  theme?: ThemeProp;
  testID?: string;
};
export type BadgeProps = {
  visible?: boolean;
  children?: string | number;
  size?: number;
  style?: StyleProp<TextStyle>;
  theme?: ThemeProp;
  testID?: string;
};
