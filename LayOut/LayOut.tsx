import { LayOutProps } from './LayOut.props';
import styles from './LayOut.module.css';
import { Header } from './Header/Header';
import { SideBar } from './SideBar/SideBar';
import { Footer } from './Footer/Footer';
import { FunctionComponent } from 'react';
import { AppContextProvider, IAppContext } from '@/context/app.context';
import { Up } from '@/components';

function LayOut({ children }: LayOutProps): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <SideBar className={styles.sideBar} />
      <div className={styles.body}>{children}</div>
      <Footer className={styles.footer} />
      <Up />
    </div>
  );
}

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <LayOut>
          <Component {...props} />
        </LayOut>
      </AppContextProvider>
    );
  };
};
