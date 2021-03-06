import { HTMLAttributes, ReactNode } from 'react';
import { DefaultProps } from '../../stitches.config';
export interface Props extends HTMLAttributes<HTMLButtonElement>, Omit<DefaultProps, 'spacing'> {
    children: ReactNode;
    loading?: boolean;
    disabled?: boolean;
    theme?: 'default' | 'border' | 'minimal' | 'solid';
    block?: boolean;
    icon?: ReactNode;
    iconPosition?: 'left' | 'right';
    inline?: DefaultProps['spacing'] | 'auto';
    small?: boolean;
}
export default function Button(props: Props): JSX.Element;
//# sourceMappingURL=Button.d.ts.map