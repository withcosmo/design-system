import { fadeIn, fadeOut, styled } from '../../stitches.config';

export const ToastStyled = styled('div', {
  background: '$background',
  border: '0.2rem solid $border',
  borderRadius: '$1',
  boxShadow: '$3',
  cursor: 'pointer',
  fontSize: '$h6',
  height: 'auto',
  lineHeight: '$h6',
  marginTop: '$3',
  overflow: 'hidden',
  padding: '$1 $3',
  position: 'relative',
  transition: '$default',
  variants: {
    animation: {
      false: {
        animation: `${fadeOut} .3s`,
        animationFillMode: 'forwards',
      },
      true: {
        animation: `${fadeIn} .4s`,
        animationFillMode: 'forwards',
      },
    },
    theme: {
      default: {
        background: '$background',
      },
      error: {
        borderColor: '$orangeBorder',
        color: '$orangeText',
      },
      success: {
        borderColor: '$greenBorder',
        color: '$greenText',
      },
    },
  },
});

export const ToastContainerStyled = styled('div', {
  bottom: '$3',
  position: 'fixed',
  right: '$3',
  zIndex: '$toast',
});

export default ToastStyled;
