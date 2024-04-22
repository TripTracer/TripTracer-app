import { forwardRef } from 'react';
import { Appbar } from 'react-native-paper';

import { iHeaderProps } from '../../../utils/types/components/appBar';

const Header = forwardRef<any, iHeaderProps>(function Header(
  {
    id,
    children,
    dark,
    statusBarHeight,
    mode,
    elevated,
    theme,
    style,
    testID,
    ...rest
  }: iHeaderProps,
  ref: React.Ref<any> | null,
) {
  return (
    <Appbar.Header
      id={id}
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
