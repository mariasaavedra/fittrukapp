import { CSSProperties, ReactNode } from 'react';
import { ComponentProps } from './ComponentProps';

export interface ParentComponentProps extends ComponentProps {
    children: ReactNode;
}

export interface MaybeParentComponentProps extends ComponentProps {
    children?: ReactNode;
}
