import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export default interface PProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  size?: 'small' | 'medium';
  href?: string;
  color?: 'ghost' | 'green' | 'grey' | 'red' | 'primary';
}
