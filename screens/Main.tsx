import React from 'react';
import { View, Text } from 'react-native';

const MainScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Welcome to My App</Text>
      <Text style={{ marginBottom: 10 }}>Main Page</Text>
    </View>
  );
};

export default MainScreen;
