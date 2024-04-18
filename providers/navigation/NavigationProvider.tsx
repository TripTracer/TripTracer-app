import * as React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../../screens/Home';
import { RootTabParamList } from '../../utils/types';
import SettingsStackScreen from './stacks/SettingsStack';

const Tab = createMaterialBottomTabNavigator<RootTabParamList>();

function NavigationProvider() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen
          name='Home'
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Tab.Screen
          name='SettingsStack'
          component={SettingsStackScreen}
          options={{ title: 'Settings' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default NavigationProvider;