import { forwardRef } from 'react';
import { Avatar } from 'react-native-paper';

import { AvatarImageProps } from '../../../utils/types';

const AvatarImage = forwardRef(function AvatarImage({
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
  ref,
  ...rest
}: AvatarImageProps) {
  return (
    <Avatar.Image
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
