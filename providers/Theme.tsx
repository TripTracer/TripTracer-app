import * as React from 'react';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { expo } from '../app.json';

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PaperProvider>{children}</PaperProvider>;
}

AppRegistry.registerComponent(expo.name, () => ThemeProvider);
