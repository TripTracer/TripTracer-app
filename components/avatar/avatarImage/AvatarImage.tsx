import { forwardRef } from 'react';
import { Avatar } from 'react-native-paper';

import { iAvatarImageProps } from '../../../utils/types/components/avatar';

const AvatarImage = forwardRef<any, iAvatarImageProps>(function AvatarImage(
  {
    id,
    source,
    size,
    style,
    onError,
    onLayout,
    onLoad,
    onLoadEnd,
    onLoadStart,
    onProgress,
    theme,
    testID,
    ...rest
  }: iAvatarImageProps,
  ref: React.Ref<any> | null,
) {
  return (
    <Avatar.Image
      id={id}
      source={source}
      size={size}
      style={style}
      onError={onError}
      onLayout={onLayout}
      onLoad={onLoad}
      onLoadEnd={onLoadEnd}
      onLoadStart={onLoadStart}
      onProgress={onProgress}
      theme={theme}
      testID={testID}
      ref={ref}
      {...rest}
    />
  );
});
export default AvatarImage;
