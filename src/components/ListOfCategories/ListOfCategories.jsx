import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Category } from '..';
import { List, Item } from './styled';

const API_ENDPOINT = 'https://petgram-server-fab.vercel.app/categories';

const ListOfCategories = () => {
  const [categories, setCategories] = useState([]);
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    axios.get(API_ENDPOINT)
      .then(({ data }) => setCategories(data));
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const newShowFixed = window.scrollY > 200;
      // eslint-disable-next-line no-unused-expressions
      if (newShowFixed !== showFixed) {
        setShowFixed(newShowFixed);
      }
    };
    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [showFixed]);

  const renderList = (fixed) => (
    <List className={fixed ? 'fixed' : ''}>
      {
          categories.map((category) => (
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

  return (
    <>
      {renderList()}
      { showFixed && renderList(true)}
    </>
  );
};

export default ListOfCategories;
