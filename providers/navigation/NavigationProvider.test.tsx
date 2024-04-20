import { Text } from 'react-native-paper';

import { render, waitFor } from '@testing-library/react-native';

import NavigationProvider from './NavigationProvider';

describe('NavigationProvider Component', () => {
  it('should render children', () => {
    const children = <Text>Test Children</Text>;
    render(<NavigationProvider>{children}</NavigationProvider>);
    waitFor(() => {
      expect(screen.getByText('Test Children')).toBeInTheDocument();
    });
  });
  it('should render navigation container', () => {
    render(<NavigationProvider />);
    waitFor(() => {
      expect(screen.getByTestId('navigation-container')).toBeInTheDocument();
    });
  });
  it('should render tab navigator', () => {
    render(<NavigationProvider />);
    waitFor(() => {
      expect(screen.getByTestId('tab-navigator')).toBeInTheDocument();
    });
  });
  it('should render home screen', () => {
    render(<NavigationProvider />);
    waitFor(() => {
      expect(screen.getByTestId('home-screen')).toBeInTheDocument();
    });
  });
  it('should render settings stack screen', () => {
    render(<NavigationProvider />);
    waitFor(() => {
      expect(screen.getByTestId('settings-stack-screen')).toBeInTheDocument();
    });
  });
  it('should render home screen title', () => {
    render(<NavigationProvider />);
    waitFor(() => {
      expect(screen.getByTestId('home-screen-title')).toBeInTheDocument();
    });
  });
  it('should render settings stack screen title', () => {
    render(<NavigationProvider />);
    waitFor(() => {
      expect(
        screen.getByTestId('settings-stack-screen-title'),
      ).toBeInTheDocument();
    });
  });
});
