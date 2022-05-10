import React from 'react';
import { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';
import { getPlayerData } from '../services/fetch-utils.js';
import PlayerList from './PlayerList';

export default function ListPage() {
  const [players, setPlayers] = useState([]);
  const [page, setPage] = useState(2);
  const [paginationItems, setPaginationItems] = useState([]);
  const playersPerPage = 50;

  useEffect(() => {
    async function fetch() {
      const from = page * playersPerPage - playersPerPage;
      const to = page * playersPerPage - 1;
      const playerData = await getPlayerData(from, to);

      setPlayers(playerData);
    }
    fetch();
  }, [page]);

  useEffect(() => {}, []);

  return (
    <div>
      <h2>NHL Players</h2>
      {console.log(players)}
      <PlayerList />
      <Pagination>{paginationItems}</Pagination>
    </div>
  );
}
