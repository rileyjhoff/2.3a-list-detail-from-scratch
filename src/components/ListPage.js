import React from 'react';
import { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';
import { getPlayerData } from '../services/fetch-utils.js';
import PlayerList from './PlayerList';

export default function ListPage() {
  const [players, setPlayers] = useState([]);
  const [page, setPage] = useState(1);
  const [paginationItems, setPaginationItems] = useState([]);
  const playersPerPage = 50;

  useEffect(() => {
    async function fetch() {
      const playerData = await getPlayerData();

      setPlayers(playerData);
    }
    fetch();
  }, [page]);

  useEffect(() => {}, []);

  return (
    <div>
      <h2>NHL Players</h2>
      <PlayerList />
      <Pagination>{paginationItems}</Pagination>
    </div>
  );
}
