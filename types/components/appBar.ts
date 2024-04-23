import { ReactNode } from 'react';
import {
  Animated,
  ColorValue,
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import { TextRef } from 'react-native-paper/lib/typescript/components/Typography/Text';
import { ThemeProp } from 'react-native-paper/lib/typescript/types';

export type iAppBarProps = {
  id?: string;
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

export type iActionProps = {
  id?: string;
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

export type iBackActionProps = {
  id?: string;
  color?: string;
  size?: number;
  disabled?: boolean;
  accessibilityLabel?: string;
  onPress?: (e: GestureResponderEvent) => void;
  style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
  testID?: string;
};

export type iContentProps = {
  id?: string;
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
export type iHeaderProps = {
  id?: string;
  children: ReactNode;
  dark?: boolean;
  statusBarHeight?: number;
  mode?: 'small' | 'medium' | 'large' | 'center-aligned';
  elevated?: boolean;
  theme?: ThemeProp;
  style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
  testID?: string;
};
