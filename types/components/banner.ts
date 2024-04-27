import { Animated, StyleProp, View, ViewStyle } from 'react-native';
import { Button } from 'react-native-paper';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import {
  $RemoveChildren,
  ThemeProp,
} from 'react-native-paper/lib/typescript/types';

export type iBannerProps = {
  id?: string;
  visible: boolean;
  children: React.ReactNode;
  icon?: IconSource;
  actions?: Array<{ label: string } & $RemoveChildren<typeof Button>>;
  contentStyle?: StyleProp<ViewStyle>;
  elevation?: 0 | 1 | 2 | 3 | 4 | 5 | Animated.Value;
  maxFontSizeMultiplier?: number;
  style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
  theme?: ThemeProp;
  onShowAnimationFinished?: Animated.EndCallback;
  onHideAnimationFinished?: Animated.EndCallback;
  testID?: string;
  ref?: React.RefObject<View>;
};
