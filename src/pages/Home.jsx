import React from 'react';
import { useParams } from 'react-router-dom';
import { ListOfCategories, ListOfPhotoCards } from '../components';

const Home = () => {
  const { id } = useParams();
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </>
  );
};

export default Home;
