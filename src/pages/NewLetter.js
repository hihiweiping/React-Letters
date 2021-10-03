import { useHistory } from 'react-router-dom';

import NewLetterForm from '../components/letters/NewLetterForm';
import {API_FETCH_DATA} from "../global/constants"

function NewLetterPage() {
  const history = useHistory();

  function addLetterHandler(letterData) {
    fetch(
      API_FETCH_DATA,
      {
        method: 'POST',
        body: JSON.stringify(letterData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      history.replace('/');
    });
  }

  return (
    <section>
      <h1>Add New Letter</h1>
      <NewLetterForm onAddLetter={addLetterHandler} />
    </section>
  );
}

export default NewLetterPage;
