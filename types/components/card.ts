import {
  Animated,
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { ThemeProp } from 'react-native-paper/lib/typescript/types';

export type iCardProps = {
  id?: string;
  mode?: 'elevated' | 'outlined' | 'contained';
  children: React.ReactNode;
  onLongPress?: () => void;
  onPress?: (e: GestureResponderEvent) => void;
  onPressIn?: (e: GestureResponderEvent) => void;
  onPressOut?: (e: GestureResponderEvent) => void;
  delayLongPress?: number;
  disabled?: boolean;
  elevation?: 0 | 1 | 2 | 3 | 4 | 5 | Animated.Value;
  contentStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  theme?: ThemeProp;
  testID?: string;
  accessible?: boolean;
};
export type iCardActionsProps = {
  id?: string;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  theme?: ThemeProp;
  testID?: string;
};
export type iCardContentProps = {
  id?: string;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  testID?: string;
};
export type iCardCoverProps = {
  id?: string;
  style?: StyleProp<ViewStyle>;
  theme?: ThemeProp;
  testID?: string;
};
export type iCardTitleProps = {
  id?: string;
  title: React.ReactNode;
  titleStyle?: StyleProp<TextStyle>;
  titleNumberOfLines?: number;
  titleVariant?: any;
  subtitle?: React.ReactNode;
  subtitleStyle?: StyleProp<TextStyle>;
  subtitleNumberOfLines?: number;
  subtitleVariant?: any;
  left?: (props: { size: number }) => React.ReactNode;
  leftStyle?: StyleProp<ViewStyle>;
  right?: (props: { size: number }) => React.ReactNode;
  rightStyle?: StyleProp<ViewStyle>;
  titleMaxFontSizeMultiplier?: number;
  subtitleMaxFontSizeMultiplier?: number;
  style?: StyleProp<ViewStyle>;
  theme?: ThemeProp;
  testID?: string;
};
