import { StyleProp, TextStyle } from 'react-native';
import { ThemeProp } from 'react-native-paper/lib/typescript/types';

export type iBadgeProps = {
  id?: string;
  visible?: boolean;
  children?: string | number;
  size?: number;
  style?: StyleProp<TextStyle>;
  theme?: ThemeProp;
  testID?: string;
};
