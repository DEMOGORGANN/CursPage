import { Htag, Button, Parg, Tag, Rating, Input } from '@/components';
import { withLayout } from '@/LayOut/LayOut';
import { GetStaticProps } from 'next';
import { useState } from 'react';
import axios from 'axios';
import { MenuItem } from '@/interfaces/menu.interface';
import { API } from '@/helpers/api';

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h3">adsdas</Htag>
      <Button appearance="primary" arrow="right">
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="down">
        Кнопка
      </Button>
      <Parg size="small">sdfsd</Parg>
      <Parg size="medium">sdfsd</Parg>
      <Parg size="big">sdfsd</Parg>
      <Tag color="red">red</Tag>
      <Tag color="ghost">ghost</Tag>
      <Tag color="green">green</Tag>
      <Tag color="primary">primary</Tag>
      <Tag color="grey" size="medium" href="/404"> 
        dfsfsda
      </Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
      <Input placeholder="test" />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;

  const { data: menu } = await axios.post<MenuItem[]>(API.TopPage.find, { firstCategory });

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
