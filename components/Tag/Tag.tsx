import TagProps from './TagProps.props';
import cn from 'classnames';
import styles from './Tag.module.css';

export function Tag({
  children,
  size = 'small',
  color = 'ghost',
  href,
  className,
  ...props
}: TagProps): JSX.Element {
  return (
    <div
      className={cn(styles.Tag, className, {
        [styles.small]: size == 'small',
        [styles.medium]: size == 'medium',
        [styles.ghost]: color == 'ghost',
        [styles.green]: color == 'green',
        [styles.grey]: color == 'grey',
        [styles.red]: color == 'red',
        [styles.primary]: color == 'primary',
      })}
      {...props}
    >
      {href ? <a href={href}> {children} </a> : <>{children}</>}{' '}
    </div>
  );
}
