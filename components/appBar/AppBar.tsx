import { forwardRef } from 'react';
import { Appbar } from 'react-native-paper';

import { AppBarProps } from '../../utils/types';

const AppBar = forwardRef<any, AppBarProps>(function AppBar(
  {
    children,
    dark,
    mode,
    elevated,
    safeAreaInsets,
    theme,
    style,
    testID,
    ...rest
  }: AppBarProps,
  ref: React.Ref<any> | null,
) {
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
