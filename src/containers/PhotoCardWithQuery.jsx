import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { PhotoCard } from '../components';

const Query = ({ children, variables, query }) => {
  const result = useQuery(query, { variables });
  return children(result);
};
Query.propTypes = {
  children: PropTypes.func.isRequired,
  variables: PropTypes.objectOf(PropTypes.any),
};
Query.defaultProps = {
  variables: {},
};

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id:ID!){
    photo(id: $id){
      id,
      categoryId,
      src,
      likes,
      userId,
      liked
    }
  }
`;

const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {
      ({ data, loading, error }) => {
        if (loading) return <p>Cargando imagen...</p>;
        if (error) return <p>No se pudo cargar la imagen :(</p>;
        const { photo } = data;
        return <PhotoCard id={photo.id} src={photo.src} likes={photo.likes} />;
      }
    }
  </Query>
);

PhotoCardWithQuery.propTypes = {
  id: PropTypes.string.isRequired,
};

export default PhotoCardWithQuery;
