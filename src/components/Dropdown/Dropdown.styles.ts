import { fadeIn, fadeOut, styled } from '../../stitches.config';

export const DropdownStyled = styled('div', {
  display: 'inline-block',
  position: 'relative',
});

export const DropdownTriggerStyled = styled('div', {
  '*': {
    cursor: 'pointer',
  },
  display: 'inline-flex',
  position: 'relative',
  verticalAlign: 'middle',
});

export const DropdownGroupStyled = styled('div', {
  background: '$background',
  border: '0.1rem solid $border',
  borderRadius: '$1',
  boxShadow: '$3',
  lineBreak: 'auto',
  marginTop: '5%',
  overflowY: 'auto',
  padding: 'calc($2 / 1.5)',
  position: 'absolute',
  textAlign: 'left !important',
  transition: '$default',
  variants: {
    animation: {
      false: {
        animation: `${fadeOut} .2s`,
        animationFillMode: 'forwards',
      },
      true: {
        animation: `${fadeIn} .2s`,
        animationFillMode: 'forwards',
      },
    },
  },
  width: '100%',
  zIndex: '$dropdown',
});

export const DropdownItemStyled = styled('div', {
  '&.active': {
    '&:hover': {
      backgroundColor: '$defaultHover',
    },
  },
  '&:hover': {
    background: '$default',
    borderBottomColor: 'transparent',
    borderRadius: '$1',
  },
  '&:last-child': {
    borderBottom: 0,
  },

  borderRadius: 0,
  cursor: 'pointer',
  display: 'flex',
  fontSize: '$h6',
  lineHeight: 'normal',
  transition: '$default',
  variants: {
    submenu: {
      false: {
        padding: '$2 $3',
      },
      true: {
        a: {
          display: 'block',
          padding: '$3',
          width: '100%',
        },
        padding: 0,
      },
    },
  },
});

export default { DropdownStyled };
