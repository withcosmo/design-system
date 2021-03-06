import { ClipboardText } from 'phosphor-react';
import React, { ReactNode, useState } from 'react';

import { DefaultProps } from '../../stitches.config';
import { Button } from '../Button';

import { CodeStyled, CodeFunctionStyled, CodeBlockStyled } from './Code.styles';

export interface Props extends DefaultProps {
  children: ReactNode;
  copy?: boolean;
}

export default function Code(props: Props): JSX.Element {
  const [isCopied, setIsCopied] = useState(false);

  function handleCopy(): void {
    if (props.copy) {
      navigator.clipboard.writeText(props.children.toString());
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    }
  }

  return (
    <CodeStyled css={props.css}>
      <CodeFunctionStyled>
        {props.copy && (
          <Button icon={isCopied ? <ClipboardText opacity={0.4} weight='duotone' /> : <ClipboardText weight='duotone' />} onClick={handleCopy}>
            Copy
          </Button>
        )}
      </CodeFunctionStyled>
      <CodeBlockStyled>{props.children}</CodeBlockStyled>
    </CodeStyled>
  );
}
