import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

describe('<App />', () => {
  it('should render the app with the necessary components', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should not render the QueryProvider, ThemeProvider, and NavigationProvider components', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
