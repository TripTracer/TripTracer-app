import { render, waitFor } from '@testing-library/react-native';

import BottomNavbar from './BottomNavbar';

describe('BottomNavbar', () => {
  it('renders correctly', () => {
    const navigationState = {
      routes: [
        { key: 'home', title: 'Home', icon: 'home' },
        { key: 'profile', title: 'Profile', icon: 'account' },
      ],
      index: 0,
    };

    waitFor(() => {
      const { getByTestId } = render(
        <BottomNavbar
          shifting={true}
          labeled={true}
          compact={false}
          navigationState={navigationState}
          activeColor='blue'
          inactiveColor='gray'
          testID='test-bottom-navbar'
        />,
      );
      const bottomNavbar = getByTestId('test-bottom-navbar');
      expect(bottomNavbar).toBeTruthy();
    });
  });

  it('applies props correctly', () => {
    const navigationState = {
      routes: [
        { key: 'home', title: 'Home', icon: 'home' },
        { key: 'profile', title: 'Profile', icon: 'account' },
      ],
      index: 0,
    };
    waitFor(() => {
      const { getByTestId } = render(
        <BottomNavbar
          shifting={true}
          labeled={true}
          compact={false}
          navigationState={navigationState}
          activeColor='blue'
          inactiveColor='gray'
          animationEasing='ease-in-out'
          testID='test-bottom-navbar'
        />,
      );
      const bottomNavbar = getByTestId('test-bottom-navbar');
      expect(bottomNavbar.props.shifting).toBe(true);
      expect(bottomNavbar.props.labeled).toBe(true);
      expect(bottomNavbar.props.compact).toBe(false);
      expect(bottomNavbar.props.navigationState).toEqual(navigationState);
      expect(bottomNavbar.props.activeColor).toBe('blue');
      expect(bottomNavbar.props.inactiveColor).toBe('gray');
      expect(bottomNavbar.props.animationEasing).toBe('ease-in-out');
    });
  });
});
