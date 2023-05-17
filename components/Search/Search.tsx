import { SearchProps } from './Search.props';
import cn from 'classnames';
import styles from './Search.module.css';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { useState } from 'react';
import GlassIcon from './SearchGlas.svg';
import { useRouter } from 'next/router';

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const [search, setSearch] = useState<string>('');
  const router = useRouter();

  const goToSearch = () => {
    if (search.length !== 0) {
      router.push({ pathname: '/search', query: { q: search } });
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key == 'Enter' && search.length !== 0) {
      goToSearch();
    }
  };

  return (
    <div className={cn(className, styles.search)} {...props}>
      <Input placeholder="Поиск..." value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={handleKeyDown} className={styles.input} />
      <Button appearance="primary" className={styles.button} onClick={goToSearch}>
        <GlassIcon />
      </Button>
    </div>
  );
};
