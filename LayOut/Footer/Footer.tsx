import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import cn from 'classnames';
import { format } from 'date-fns';

export function Footer({ className, ...props }: FooterProps): JSX.Element {
  return (
    <div className={cn(className, styles.foot)} {...props}>
      <span className={styles.f1}>
        OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
      </span>
      <a href="#" className={styles.f2}>
        Пользовательское соглашение
      </a>
      <a href="#" className={styles.f3}>
        Политика конфиденциальности
      </a>
    </div>
  );
}
