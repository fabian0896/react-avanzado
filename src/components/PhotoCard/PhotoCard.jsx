import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useNearScreen } from '../../hooks';
import {
  ImgWraper,
  Img,
  Article,
} from './styled';

import { FavButton } from '..';
import { ToggleLikeMutation } from '../../containers';

const PhotoCard = ({
  id, likes, src, liked,
}) => {
  const [show, ref] = useNearScreen();

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
                  toggleLike({
                    variables: {
                      input: { id },
                    },
                  });
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
  liked: PropTypes.bool,
};

PhotoCard.defaultProps = {
  likes: 0,
  liked: false,
};

export default PhotoCard;
