import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/Home';
import SettingsStackScreen from '../components/settingsScreen/SettingsStack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

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
