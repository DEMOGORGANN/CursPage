import CoursesItem from './Icons/courses.svg';
import BoockItem from './Icons/books.svg';
import ProductItem from './Icons/product.svg';
import ServisesItem from './Icons/servises.svg';
import { FirstLevelMenuItem } from '@/interfaces/menu.interface';
import { TopLevelCategory } from '@/interfaces/topPage.interface';

export const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: 'courses', name: 'Курсы', icon: <CoursesItem />, id: TopLevelCategory.Courses },
  { route: 'servises', name: 'Сервисы', icon: <ServisesItem />, id: TopLevelCategory.Services },
  { route: 'books', name: 'Книги', icon: <BoockItem />, id: TopLevelCategory.Books },
  { route: 'products', name: 'Продукты', icon: <ProductItem />, id: TopLevelCategory.Products },
];

export const priceRu = (price: number): string =>
  price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    .concat(' ₽');

export const declOfNum = (number: number, titles: [string, string, string]): string => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
};
