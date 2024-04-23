import 'react-native-gesture-handler';
import 'react-native-reanimated';
import 'setimmediate';
import '@testing-library/jest-dom';
import '@jest/globals';

import { Text } from 'react-native-paper';

import { render, screen, waitFor } from '@testing-library/react-native';

import NavigationProvider from './NavigationProvider';

describe('NavigationProvider Component', () => {
  it('should render NavigationContainer and Tab.Navigator without errors', () => {
    waitFor(() => {
      render(<NavigationProvider />);
      expect(screen.getByTestId('navigation-container')).toBeInTheDocument();
      expect(screen.getByTestId('tab-navigator')).toBeInTheDocument();
    });
  });
  it('should render children', () => {
    const children = <Text>Test Children</Text>;
    waitFor(() => {
      render(<NavigationProvider>{children}</NavigationProvider>);
      expect(screen.getByText('Test Children')).toBeInTheDocument();
    });
  });
  it('should render navigation container', () => {
    waitFor(() => {
      render(<NavigationProvider />);
      expect(screen.getByTestId('navigation-container')).toBeInTheDocument();
    });
  });
  it('should render tab navigator', () => {
    waitFor(() => {
      render(<NavigationProvider />);
      expect(screen.getByTestId('tab-navigator')).toBeInTheDocument();
    });
  });
  it('should render home screen', () => {
    waitFor(() => {
      render(<NavigationProvider />);
      expect(screen.getByTestId('home-screen')).toBeInTheDocument();
    });
  });
  it('should render settings stack screen', () => {
    waitFor(() => {
      render(<NavigationProvider />);
      expect(screen.getByTestId('settings-stack-screen')).toBeInTheDocument();
    });
  });
  it('should render home screen title', () => {
    waitFor(() => {
      render(<NavigationProvider />);
      expect(screen.getByTestId('home-screen-title')).toBeInTheDocument();
    });
  });
  it('should render settings stack screen title', () => {
    waitFor(() => {
      render(<NavigationProvider />);
      expect(
        screen.getByTestId('settings-stack-screen-title'),
      ).toBeInTheDocument();
    });
  });
});
