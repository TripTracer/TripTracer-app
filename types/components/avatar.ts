import {
  ImageProps,
  ImageSourcePropType,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import { ThemeProp } from 'react-native-paper/lib/typescript/types';

export type iAvatarIconProps = {
  id?: string;
  icon: IconSource;
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
  theme?: ThemeProp;
  testID?: string;
};

export type iAvatarImageProps = {
  id?: string;
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

export type iAvatarTextProps = {
  id?: string;
  label: string;
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  maxFontSizeMultiplier?: number;
  theme?: ThemeProp;
  testID?: string;
};
