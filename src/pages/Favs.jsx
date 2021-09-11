import React from 'react';
import { ListOfFavs } from '../components';
import { useFavorites } from '../hooks';

const Favs = () => {
  const { data, loading, error } = useFavorites();
  if (error) return <p>No se pudo cargar la imagen</p>;
  if (loading) return <p>Cargando...</p>;
  console.log(data.favs);
  return (
    <div>
      <h2>Favs</h2>
      <ListOfFavs favs={data.favs} />
    </div>
  );
};

export default Favs;
