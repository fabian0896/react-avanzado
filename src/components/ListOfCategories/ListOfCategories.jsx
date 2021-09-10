import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Category } from '..';
import { List, Item } from './styled';

const API_ENDPOINT = 'https://petgram-server-fab.vercel.app/categories';

function useCategoryData() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(API_ENDPOINT)
      .then(({ data }) => {
        setCategories(data);
        setLoading(false);
      });
  }, []);
  return { categories, loading };
}

const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false);
  const { categories, loading } = useCategoryData();

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

  const renderList = (list, fixed) => (
    <List fixed={fixed}>
      {
          list.map((category, index) => (
            <Item key={category.id || index}>
              <Category
                id={category.id}
                cover={category.cover}
                emoji={category.emoji}
              />
            </Item>
          ))
      }
    </List>
  );

  if (loading) {
    return renderList(Array(6).fill({}));
  }

  return (
    <>
      {renderList(categories)}
      { showFixed && renderList(categories, true)}
    </>
  );
};

export default ListOfCategories;
