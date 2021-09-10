import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import PropTypes from 'prop-types';
// import data from '../../../api/db.json';
import { PhotoCard } from '..';

const PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId){
      id,
      categoryId,
      src,
      likes,
      userId,
      liked
    }
  }
`;

const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useQuery(PHOTOS, {
    variables: { categoryId },
  });
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>No fue posible cargar los datos :(</p>;
  return (
    <div>
      {
        data.photos.map((photo) => (
          <PhotoCard
            key={photo.id}
            id={photo.id}
            src={photo.src}
            likes={photo.likes}
          />
        ))
      }
    </div>
  );
};

ListOfPhotoCards.propTypes = {
  categoryId: PropTypes.string,
};

ListOfPhotoCards.defaultProps = {
  categoryId: null,
};

export default ListOfPhotoCards;
