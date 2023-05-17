import PProps from './Parg.props';
import cn from 'classnames';
import styles from './Parg.module.css';

export function Parg({ children, size = 'medium', className, ...props }: PProps): JSX.Element {
  return (
    <p
      className={cn(styles.parg, className, {
        [styles.small]: size == 'small',
        [styles.medium]: size == 'medium',
        [styles.big]: size == 'big',
      })}
      {...props}
    >
      {children}
    </p>
  );
}
