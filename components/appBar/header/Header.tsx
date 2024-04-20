import { forwardRef } from 'react';
import { Appbar } from 'react-native-paper';

import { HeaderProps } from '../../../utils/types';

const Header = forwardRef<any, HeaderProps>(function Header(
  {
    children,
    dark,
    statusBarHeight,
    mode,
    elevated,
    theme,
    style,
    testID,
    ...rest
  }: HeaderProps,
  ref: React.Ref<any> | null,
) {
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
