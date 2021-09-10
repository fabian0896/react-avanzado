import { useMutation, gql } from '@apollo/react-hooks';

const LIKE_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id,
      liked,
      likes
    }
  }
`;

const ToggleLikeMutation = ({ children }) => {
  const [toggleLike] = useMutation(LIKE_PHOTO);
  return children(toggleLike);
};

export default ToggleLikeMutation;
