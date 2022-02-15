import { CSS } from '@stitches/react/types/css-util';
import React, { ReactNode } from 'react';

import { breakpoints, styled } from '../../stitches.config';

export interface Props {
  border?: boolean;
  children: ReactNode;
  css?: CSS;
  extra?: boolean;
  id?: string;
  image?: ReactNode;
  imageHeight?: string;
  loader?: boolean;
  minimal?: boolean;
  theme?: 'red' | 'yellow' | 'green' | 'blue' | 'navy' | 'purple' | 'pink' | 'transparent';
}

export default function Card({ css, extra, id, theme, loader, border, image, imageHeight, minimal, children }: Props): JSX.Element {
  const Wrapper = styled('div', {
    padding: minimal ? 0 : image ? 0 : !image && extra ? '$7' : '$5',
    display: 'block',
    height: '100%',
    width: 'auto',
    position: 'relative',
    borderRadius: '$2',
    transition: '$1',
    color: 'inherit',
    opacity: loader ? 0.5 : 1,
    backgroundColor:
      theme === 'red'
        ? '$red300'
        : theme === 'yellow'
        ? '$yellow300'
        : theme === 'green'
        ? '$green300'
        : theme === 'blue'
        ? '$blue300'
        : theme === 'navy'
        ? '$navy300'
        : theme === 'purple'
        ? '$purple300'
        : theme === 'pink'
        ? '$pink300'
        : theme === 'transparent'
        ? 'transparent'
        : '$baseContrast100',
    boxShadow: border ? 0 : '$1',
    border: border
      ? `0.1rem solid ${
          theme === 'red'
            ? '$red400'
            : theme === 'yellow'
            ? '$yellow400'
            : theme === 'green'
            ? '$green400'
            : theme === 'blue'
            ? '$blue400'
            : theme === 'navy'
            ? '$navy400'
            : theme === 'purple'
            ? '$purple400'
            : theme === 'pink'
            ? '$pink400'
            : '$border200'
        }`
      : 'none',

    '&:hover': {
      boxShadow: '$2',
    },
    [breakpoints.phone]: {
      padding: minimal ? 0 : extra ? '$6' : '$5',
    },
  });

  const ImageWrapper = styled('div', {
    height: imageHeight || '15rem',
    width: '100%',
    position: 'relative',
    backgroundColor: '$baseContrast200',
    borderTopLeftRadius: '$2',
    borderTopRightRadius: '$2',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,

    img: {
      borderTopLeftRadius: '$2',
      borderTopRightRadius: '$2',
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
  });

  const ImageChildrenWrapper = styled('div', {
    padding: minimal ? 0 : extra ? '$7' : '$5',

    [breakpoints.phone]: {
      padding: minimal ? 0 : extra ? '$6' : '$5',
    },
  });

  return image ? (
    <Wrapper css={css} id={id}>
      <ImageWrapper>{image}</ImageWrapper>
      <ImageChildrenWrapper>{children}</ImageChildrenWrapper>
    </Wrapper>
  ) : (
    <Wrapper css={css} id={id}>
      {children}
    </Wrapper>
  );
}
