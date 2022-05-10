import { useEffect, useState } from 'react';
import './App.css';
import { getPlayerData } from './services/fetch-utils';

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function fetch() {
      const playerData = await getPlayerData();

      setPlayers(playerData);
    }
    fetch();
  }, []);

  return <div className="App">{console.log(players)}</div>;
}

export default App;
