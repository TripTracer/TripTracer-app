import { forwardRef } from 'react';
import { Appbar } from 'react-native-paper';

import { AppBarProps } from '../../utils/types';

const AppBar = forwardRef(function AppBar({
  children,
  dark,
  mode,
  elevated,
  safeAreaInsets,
  theme,
  style,
  testID,
  ref,
  ...rest
}: AppBarProps) {
  return (
    <Appbar
      dark={dark}
      mode={mode}
      elevated={elevated}
      safeAreaInsets={safeAreaInsets}
      theme={theme}
      style={style}
      testID={testID}
      ref={ref}
      {...rest}
    >
      {children}
    </Appbar>
  );
});
export default AppBar;
