import React from 'react';
import data from '../../../api/db.json';
import { PhotoCard } from '..';

const ListOfPhotoCards = () => (
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

export default ListOfPhotoCards;
