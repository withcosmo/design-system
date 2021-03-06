import React, { ReactNode, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

import { DefaultProps } from '../../stitches.config';

import { PopoverContentStyled, PopoverStyled, PopoverTriggerStyled } from './Popover.styles';

export interface Props extends DefaultProps {
  children: ReactNode;
  type?: 'click' | 'hover';
  trigger: ReactNode;
  minimal?: boolean;
  width?: number;
}

export default function Popover(props: Props): JSX.Element {
  const ref = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  function handleClose(): void {
    setIsOpen(false);
    setTimeout(() => {
      setIsMounted(false);
    }, 420);
  }

  function handleClick(): void {
    if (!props.type || props.type === 'click') {
      if (isOpen) {
        handleClose();
      } else {
        setIsOpen(true);
        setIsMounted(true);
      }
    }
  }

  function handleMouseEnter(): void {
    if (props.type === 'hover') {
      setIsOpen(true);
      setIsMounted(true);
    }
  }

  function handleMouseLeave(): void {
    if (props.type === 'hover') {
      handleClose();
    }
  }

  useOnClickOutside(ref, () => handleClose());

  return (
    <PopoverStyled id={props.id}>
      <PopoverTriggerStyled onClickCapture={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {props.trigger}
      </PopoverTriggerStyled>
      {isMounted && (
        <PopoverContentStyled
          animation={isOpen}
          css={{
            ...props.css,
            width: props.width || 'auto',
          }}
          minimal={props.minimal}
          ref={ref}>
          {props.children}
        </PopoverContentStyled>
      )}
    </PopoverStyled>
  );
}
