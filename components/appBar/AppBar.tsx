import { forwardRef } from 'react';
import { Appbar } from 'react-native-paper';

import { iAppBarProps } from '../../utils/types/components/appBar';

const AppBar = forwardRef<any, iAppBarProps>(function AppBar(
  {
    id,
    children,
    dark,
    mode,
    elevated,
    safeAreaInsets,
    theme,
    style,
    testID,
    ...rest
  }: iAppBarProps,
  ref: React.Ref<any> | null,
) {
  return (
    <Appbar
      id={id}
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
