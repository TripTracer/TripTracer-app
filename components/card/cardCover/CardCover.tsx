import { forwardRef } from 'react';
import { Card } from 'react-native-paper';

import { iCardCoverProps } from '../../../types/components/card';

const CardCover = forwardRef<any, iCardCoverProps>(function CardCover(
  { id, style, testID, ...rest }: iCardCoverProps,
  ref: React.Ref<any>,
) {
  return (
    <Card.Cover
      id={id}
      style={style}
      testID={testID}
      ref={ref}
      {...rest}
    />
  );
});
export default CardCover;
