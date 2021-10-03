import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteLetter) => {},
  removeFavorite: (letterId) => {},
  itemIsFavorite: (letterId) => {}
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteLetter) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteLetter);
    });
  }

  function removeFavoriteHandler(letterId) {
    setUserFavorites(prevUserFavorites => {
      return prevUserFavorites.filter(letter => letter.id !== letterId);
    });
  }

  function itemIsFavoriteHandler(letterId) {
    return userFavorites.some(letter => letter.id === letterId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
