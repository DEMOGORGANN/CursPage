import { SideBarProps } from './SideBar.props';
import { Menu } from '../Menu/Menu';
import Logo from './logo.svg';
import styles from './Sidebar.module.css';
import cn from 'classnames';
import { Search } from '@/components';

export function SideBar({ className, ...props }: SideBarProps): JSX.Element {
  return (
    <div className={cn(className, styles.sidBar)} {...props}>
      <Logo className={styles.logo} />
      <Search />
      <Menu />
    </div>
  );
}
