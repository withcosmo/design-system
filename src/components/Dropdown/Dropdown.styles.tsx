import { keyframes } from '@stitches/react';

import { styled } from '../../stitches.config';

export default function DropdownStyles() {
  const SoftAnimation = keyframes({
    '0%': {
      opacity: 0,
    },

    '100%': {
      opacity: 1,
    },
  });

  const Wrapper = styled('div', {
    position: 'relative',
    display: 'inline-flex',
  });

  const TriggerWrapper = styled('div', {
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    appearance: 'none',
    outline: 'none',
    userSelect: 'none',
    transition: '$1',

    variants: {
      hover: {
        false: {
          '&:hover': {
            color: 'inherit',
            opacity: 1,
          },
          true: {
            '&:hover': {
              color: 'inherit',
              opacity: 0.7,
            },
          },
        },
      },
    },
  });

  const GroupWrapper = styled('div', {
    background: '$baseContrast100',
    borderRadius: '$2',
    border: '0.1rem solid $border100',
    boxShadow: '$3',
    boxSizing: 'border-box',
    overflowY: 'auto',
    position: 'absolute',
    padding: '$2',
    top: '120%',
    maxHeight: '50rem',
    width: '100%',
    zIndex: '$dropdown',
    webkitoverflowscrolling: 'touch',

    variants: {
      animation: {
        false: {
          animation: 'none',
        },
        true: {
          animation: `${SoftAnimation} .3s`,
        },
      },
    },
  });

  const ItemWrapper = styled('div', {
    display: 'flex',
    textAlign: 'left',
    transition: '$1',
    padding: '$3',
    borderBottom: '0.1rem solid $navy300',
    cursor: 'pointer',
    borderRadius: '$1',
    ft: '$h5',
    lineHeight: '1.1 !important',
    opacity: 1,

    a: {
      display: 'block',
      width: '100%',
    },

    '&:hover': {
      backgroundColor: '$navy400',
    },

    '&:last-child': {
      borderBottom: 0,
    },

    '&.active': {
      backgroundColor: '$navy300',

      '&:hover': {
        backgroundColor: '$navy400',
      },
    },

    phone: {
      ft: '$h5',
    },
  });

  return { Wrapper, TriggerWrapper, GroupWrapper, ItemWrapper };
}
