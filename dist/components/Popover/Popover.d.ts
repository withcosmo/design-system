import { ReactNode } from 'react';
import { DefaultProps } from '../../stitches.config';
export interface Props extends DefaultProps {
    children: ReactNode;
    type?: 'click' | 'hover';
    trigger: ReactNode;
    minimal?: boolean;
    width?: number;
}
export default function Popover(props: Props): JSX.Element;
//# sourceMappingURL=Popover.d.ts.map