import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/Home';
import SettingsScreen from '../screens/Settings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsStackScreen from '../components/settingsScreen/SettingsStack';

const Tab = createBottomTabNavigator();

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
