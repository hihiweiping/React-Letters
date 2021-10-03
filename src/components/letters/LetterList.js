import LetterItem from './LetterItem';
import classes from './LetterList.module.css';

function LetterList(props) {
  return (
    <ul className={classes.list}>
      {props.letters.map((letter) => (
        <LetterItem
          key={letter.id}
          id={letter.id}
          image={letter.image}
          recipient={letter.recipient}
          sender={letter.sender}
          text={letter.text}
        />
      ))}
    </ul>
  );
}

export default LetterList;

