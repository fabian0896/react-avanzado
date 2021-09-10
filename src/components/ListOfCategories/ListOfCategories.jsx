import React from 'react';
import { Category } from '..';
import { List, Item } from './styled';
import data from '../../../api/db.json';

const ListOfCategories = () => (
  <List>
    {
        data.categories.map((category) => (
          <Item key={category.id}>
            <Category
              cover={category.cover}
              path={category.path}
              emoji={category.emoji}
            />
          </Item>
        ))
    }
  </List>
);

export default ListOfCategories;
