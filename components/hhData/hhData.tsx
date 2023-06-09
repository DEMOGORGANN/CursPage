import { hhDataProps } from './hhData.props';
import styles from './hhData.module.css';
import { Card } from '../Card/Card';
import StarIcon from './Stars.svg';
import { priceRu } from '@/helpers/helpers';

export function HhData({ count, juniorSalary, middleSalary, seniorSalary }: hhDataProps): JSX.Element {
  return (
    <div className={styles.hh}>
      <Card className={styles.Count}>
        <div className={styles.title}>Всего вакансий</div>
        <div className={styles.CountValue}>{count}</div>
      </Card>
      <Card className={styles.salary}>
        <div>
          <div className={styles.title}>Начальный</div>
          <div className={styles.salaryValue}>{priceRu(juniorSalary)}</div>
          <div className={styles.rate}>
            <StarIcon className={styles.filled} />
            <StarIcon />
            <StarIcon />
          </div>
        </div>
        <div>
          <div className={styles.title}>Средний</div>
          <div className={styles.salaryValue}>{priceRu(middleSalary)}</div>
          <div className={styles.rate}>
            <StarIcon className={styles.filled} />
            <StarIcon className={styles.filled} />
            <StarIcon />
          </div>
        </div>
        <div>
          <div className={styles.title}>Профессионал</div>
          <div className={styles.salaryValue}>{priceRu(seniorSalary)}</div>
          <div className={styles.rate}>
            <StarIcon className={styles.filled} />
            <StarIcon className={styles.filled} />
            <StarIcon className={styles.filled} />
          </div>
        </div>
      </Card>
    </div>
  );
}
