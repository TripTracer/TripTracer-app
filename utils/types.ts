import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type {
  StackNavigationProp,
  StackScreenProps,
} from '@react-navigation/stack';

export type BottomTabParamList = {
  Home: undefined;
  SettingsStack: StackScreenProps<SettingsStackParamList>;
};
export type HomeScreenProps = BottomTabScreenProps<BottomTabParamList, 'Home'>;

export type SettingsStackParamList = {
  Settings: undefined;
  Details: undefined;
};
export type SettingsScreenProp = CompositeScreenProps<
  BottomTabScreenProps<BottomTabParamList, 'SettingsStack'>,
  StackScreenProps<SettingsStackParamList>
>;
