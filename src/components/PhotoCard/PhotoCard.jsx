import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useLocalStorage, useNearScreen } from '../../hooks';
import {
  ImgWraper,
  Img,
  Article,
} from './styled';

import { FavButton } from '..';
import { ToggleLikeMutation } from '../../containers';

const PhotoCard = ({ id, likes, src }) => {
  const [show, ref] = useNearScreen();
  const [liked, setLiked] = useLocalStorage(id, 'likes');

  return (
    <Article ref={ref}>
      {
        show
        && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWraper>
              <Img src={src} alt={id} />
            </ImgWraper>
          </Link>
          <ToggleLikeMutation>
            {
              (toggleLike) => {
                const handleFavClick = () => {
                  // eslint-disable-next-line no-unused-expressions
                  !liked && toggleLike({
                    variables: {
                      input: { id },
                    },
                  });
                  setLiked(!liked);
                };
                return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />;
              }
            }
          </ToggleLikeMutation>
        </>
        )
      }
    </Article>
  );
};

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  likes: PropTypes.number,
  src: PropTypes.string.isRequired,
};

PhotoCard.defaultProps = {
  likes: 0,
};

export default PhotoCard;
