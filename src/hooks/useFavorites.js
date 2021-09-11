import { useQuery, gql } from '@apollo/react-hooks';

const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;

function useFavorites() {
  return useQuery(GET_FAVS, { fetchPolicy: 'network-only' });
}

export default useFavorites;
