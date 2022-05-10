import { useEffect, useState } from 'react';
import './App.css';
import { getPlayerData } from './services/fetch-utils';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListPage from './components/ListPage';
import DetailPage from './components/DetailPage';

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function fetch() {
      const playerData = await getPlayerData();

      setPlayers(playerData);
    }
    fetch();
  }, []);

  return (
    <Router>
      <div className="App">
        {console.log(players)}
        <Switch>
          <Route exact path="/">
            <ListPage />
          </Route>
          <Route exact path="/player/:id">
            <DetailPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
