import { forwardRef } from 'react';
import { Appbar } from 'react-native-paper';

import { HeaderProps } from '../../../utils/types';

const Header = forwardRef(function Header({
  children,
  dark,
  statusBarHeight,
  mode,
  elevated,
  theme,
  style,
  testID,
  ref,
  ...rest
}: HeaderProps) {
  return (
    <Appbar.Header
      dark={dark}
      statusBarHeight={statusBarHeight}
      mode={mode}
      elevated={elevated}
      theme={theme}
      style={style}
      testID={testID}
      ref={ref}
      {...rest}
    >
      {children}
    </Appbar.Header>
  );
});
export default Header;
