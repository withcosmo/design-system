import React from 'react';

import { breakpoints, DefaultProps } from '../../stitches.config';

import { DividerStyled } from './Divider.styles';

export interface Props extends Omit<DefaultProps, 'spacing'> {
  top?: DefaultProps['spacing'];
  bottom?: DefaultProps['spacing'];
}

export default function Divider(props: Props): JSX.Element {
  return (
    <DividerStyled
      css={{
        ...props.css,
        ...(props.top && {
          marginTop: `$${props.top}`,
          [breakpoints.phone]: {
            marginTop: props.top !== ('8' || '9') ? `calc($${props.top} * 0.9)` : `calc($${props.top} * 0.8)`,
          },
        }),
        ...(props.bottom && {
          [breakpoints.phone]: {
            marginBottom: props.bottom !== ('8' || '9') ? `calc($${props.bottom} * 0.9)` : `calc($${props.bottom} * 0.8)`,
          },
          marginBottom: `$${props.bottom}`,
        }),

        ...(props.top && {
          marginTop: `$${props.top}`,
          [breakpoints.phone]: {
            marginTop: `calc($${props.top} * 0.9)`,
          },
        }),
        ...(props.bottom && {
          marginBottom: `$${props.bottom}`,
          [breakpoints.phone]: {
            marginBottom: `calc($${props.bottom} * 0.9)`,
          },
        }),
      }}
      id={props.id}
    />
  );
}
