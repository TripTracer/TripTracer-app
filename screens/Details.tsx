import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from 'react-native-paper';

const DetailsScreen: React.FC = () => {
  // react-native-paper theme is always in sync
  const theme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.primary,
      }}
    >
      <Text>Details Screen</Text>
    </View>
  );
};

export default DetailsScreen;
