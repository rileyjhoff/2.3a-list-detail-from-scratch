import React from 'react';
import { useEffect, useState } from 'react';
import { getPlayerData } from '../services/fetch-utils.js';
import PlayerList from './PlayerList';
import PaginationComp from './PaginationComp';

export default function ListPage() {
  const [players, setPlayers] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);
  const playersPerPage = 50;

  useEffect(() => {
    async function load() {
      const from = page * playersPerPage - playersPerPage;
      const to = page * playersPerPage - 1;
      const playerData = await getPlayerData(from, to);

      setLastPage(Math.ceil(playerData.count / playersPerPage));
    }
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    async function fetch() {
      const from = page * playersPerPage - playersPerPage;
      const to = page * playersPerPage - 1;
      const playerData = await getPlayerData(from, to);

      setPlayers(playerData.data);
    }
    fetch();
  }, [page]);

  return (
    <div className="list-page">
      <h2>NHL Players</h2>
      <PaginationComp lastPage={lastPage} page={page} setPage={setPage} />
      <PlayerList players={players} />
    </div>
  );
}
