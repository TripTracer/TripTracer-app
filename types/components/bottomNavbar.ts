import { Animated, EasingFunction, StyleProp, ViewStyle } from 'react-native';
import { ThemeProp } from 'react-native-paper/lib/typescript/types';

type iBottomNavRoute = {
  key: string;
  title: string;
  focusedIcon?: string;
  unfocusedIcon?: string;
  color?: string;
  badge?: string;
  accessibilityLabel?: string;
  testID?: string;
};
export type iBottomNavbarProps = {
  shifting?: boolean;
  labeled?: boolean;
  compact?: boolean;
  navigationState: {
    index: number;
    routes: iBottomNavRoute[];
  };
  renderIcon?: (props: {
    route: iBottomNavRoute;
    focused: boolean;
    color: string;
  }) => React.ReactNode;
  renderLabel?: (props: {
    route: iBottomNavRoute;
    focused: boolean;
    color: string;
  }) => React.ReactNode;
  renderTouchable?: (props: any) => React.ReactNode;
  getAccessibilityLabel?: (props: { route: iBottomNavRoute }) => string;
  getBadge?: (props: { route: iBottomNavRoute }) => boolean | number | string;
  getColor?: (props: { route: iBottomNavRoute }) => string;
  getLabelText?: (props: { route: iBottomNavRoute }) => string;
  getTestID?: (props: { route: iBottomNavRoute }) => string;
  onTabPress: (props: { route: iBottomNavRoute } & any) => void;
  onTabLongPress?: (props: { route: iBottomNavRoute } & any) => void;
  activeColor?: string;
  inactiveColor?: string;
  animationEasing?: EasingFunction;
  keyboardHidesNavigationBar?: boolean;
  safeAreaInsets: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
  labelMaxFontSizeMultiplier?: number;
  style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
  activeIndicatorStyle?: StyleProp<ViewStyle>;
  theme?: ThemeProp;
  testID?: string;
};
