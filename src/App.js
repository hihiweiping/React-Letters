import { Route, Switch } from 'react-router-dom';

import AllLettersPage from './pages/AllLetters';
import NewLetterPage from './pages/NewLetter';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllLettersPage />
        </Route>
        <Route path='/new-letter'>
          <NewLetterPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
