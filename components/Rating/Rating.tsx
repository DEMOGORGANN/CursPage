/* eslint-disable react-hooks/exhaustive-deps */
import RatingProps from './Rating.props';
import cn from 'classnames';
import styles from './Rating.module.css';
import { useEffect, useState, KeyboardEvent, forwardRef, ForwardedRef } from 'react';
import StarIcon from './Vector.svg';

export const Rating = forwardRef(
  (
    { isEditable = false, rating, error, setRating, ...props }: RatingProps,
    ref: ForwardedRef<HTMLDivElement>,
  ): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
      constractRating(rating);
    }, [rating]);

    const constractRating = (currenRating: number) => {
      const updateArray = ratingArray.map((r: JSX.Element, i: number) => {
        return (
          <span
            className={cn(styles.star, {
              [styles.filled]: i < currenRating,
              [styles.editeble]: isEditable,
            })}
            onMouseEnter={() => changeDisplay(i + 1)}
            onMouseLeave={() => changeDisplay(rating)}
            onClick={() => onClick(i + 1)}
          >
            <StarIcon
              tabIndex={isEditable ? 0 : -1}
              onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)}
            />
          </span>
        );
      });

      setRatingArray(updateArray);
    };

    const changeDisplay = (i: number) => {
      if (!isEditable) {
        return;
      }
      constractRating(i);
    };

    const onClick = (i: number) => {
      if (!isEditable || !setRating) {
        return;
      }
      setRating(i);
    };

    const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
      if (e.code != 'Space' || !setRating) {
        return;
      }
      setRating(i);
    };

    return (
      <div {...props} ref={ref} className={cn(styles.ratingWrapper, { [styles.error]: error })}>
        {ratingArray.map((r, i) => (
          <span key={i}>{r}</span>
        ))}
        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  },
);
