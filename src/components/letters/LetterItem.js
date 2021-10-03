import { useContext } from 'react';

import Card from '../ui/Card';
import classes from './LetterItem.module.css';
import FavoritesContext from '../../store/favorites-context';

function LetterItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        recipient: props.recipient,
        text: props.text,
        image: props.image,
        sender: props.sender,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.recipient} />
        </div>
        <div className={classes.content}>
          <h3>Recipient: {props.recipient}</h3>
          <sender>Sender: {props.sender}</sender>
          <p>{props.text}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? '🧡' : '🤍'}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default LetterItem;
