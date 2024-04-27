import {
  AccessibilityRole,
  Animated,
  GestureResponderEvent,
  PressableAndroidRippleConfig,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import { ThemeProp } from 'react-native-paper/lib/typescript/types';

export type iButtonProps = {
  id: string;
  mode?: 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal';
  dark?: boolean;
  compact?: boolean;
  buttonColor?: string;
  textColor?: string;
  rippleColor?: string;
  loading?: boolean;
  icon?: IconSource;
  disabled?: boolean;
  children: React.ReactNode;
  uppercase?: boolean;
  background?: PressableAndroidRippleConfig;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  accessibilityRole?: AccessibilityRole;
  onPress?: (e: GestureResponderEvent) => void;
  onPressIn?: (e: GestureResponderEvent) => void;
  onPressOut?: (e: GestureResponderEvent) => void;
  onLongPress?: (e: GestureResponderEvent) => void;
  delayLongPress?: number;
  contentStyle?: StyleProp<ViewStyle>;
  maxFontSizeMultiplier?: number;
  style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
  labelStyle?: StyleProp<TextStyle>;
  theme?: ThemeProp;
  testID?: string;
};
