import { fadeIn, fadeOut, styled } from '../../stitches.config';

export const PopoverStyled = styled('div', {
  display: 'inline-block',
  position: 'relative',
});

export const PopoverTriggerStyled = styled('div', {
  '*': {
    cursor: 'pointer',
  },
  display: 'inline-flex',
  verticalAlign: 'middle',
  position: 'relative',
});

export const PopoverContentStyled = styled('div', {
  background: '$background',
  border: '0.1rem solid $border',
  borderRadius: '$1',
  boxShadow: '$3',
  lineBreak: 'auto',
  marginTop: '.5%',
  overflowY: 'auto',
  padding: '$1 $4',
  position: 'absolute',
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
    minimal: {
      true: {
        padding: 0,
      },
    },
  },
  width: 'auto',
  minWidth: '10rem',
  zIndex: '$popover',
});

export default PopoverStyled;
