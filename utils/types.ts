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
