import React from 'react';
import { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';
import { getPlayerData } from '../services/fetch-utils.js';
import PlayerList from './PlayerList';

export default function ListPage() {
  const [players, setPlayers] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);
  const [paginationItems, setPaginationItems] = useState([]);
  const playersPerPage = 50;

  useEffect(() => {
    async function fetch() {
      const from = page * playersPerPage - playersPerPage;
      const to = page * playersPerPage - 1;
      const playerData = await getPlayerData(from, to);

      setPlayers(playerData.data);
      setLastPage(Math.ceil(playerData.count / playersPerPage));
    }
    fetch();
  }, []);

  useEffect(() => {
    if (page === 1) {
      const items = (
        <>
          <Pagination.First key={'first'} disabled />
          <Pagination.Prev key={'prev'} disabled />
          <Pagination.Item key={page} active>
            {page}
          </Pagination.Item>
          <Pagination.Item key={page + 1} onClick={() => setPage(page + 1)}>
            {page + 1}
          </Pagination.Item>
          <Pagination.Item key={page + 2} onClick={() => setPage(page + 2)}>
            {page + 2}
          </Pagination.Item>
          <Pagination.Item key={page + 3} onClick={() => setPage(page + 3)}>
            {page + 3}
          </Pagination.Item>
          <Pagination.Item key={page + 4} onClick={() => setPage(page + 4)}>
            {page + 4}
          </Pagination.Item>
          <Pagination.Next key={'next'} onClick={() => setPage(page + 1)} />
          <Pagination.Last key={'last'} onClick={() => setPage(lastPage)} />
        </>
      );
      setPaginationItems(items);
    }
    if (page === 2) {
      const items = (
        <>
          <Pagination.First key={'first'} onClick={() => setPage(1)} />
          <Pagination.Prev key={'prev'} onClick={() => setPage(page - 1)} />
          <Pagination.Item key={page - 1} onClick={() => setPage(page - 1)}>
            {page - 1}
          </Pagination.Item>
          <Pagination.Item key={page} active>
            {page}
          </Pagination.Item>
          <Pagination.Item key={page + 1} onClick={() => setPage(page + 1)}>
            {page + 1}
          </Pagination.Item>
          <Pagination.Item key={page + 2} onClick={() => setPage(page + 2)}>
            {page + 2}
          </Pagination.Item>
          <Pagination.Item key={page + 3} onClick={() => setPage(page + 3)}>
            {page + 3}
          </Pagination.Item>
          <Pagination.Next key={'next'} onClick={() => setPage(page + 1)} />
          <Pagination.Last key={'last'} onClick={() => setPage(lastPage)} />
        </>
      );
      setPaginationItems(items);
    }
    if (page >= 3 && page <= lastPage - 2) {
      const items = (
        <>
          <Pagination.First key={'first'} onClick={() => setPage(1)} />
          <Pagination.Prev key={'prev'} onClick={() => setPage(page - 1)} />
          <Pagination.Item key={page - 2} onClick={() => setPage(page - 2)}>
            {page - 2}
          </Pagination.Item>
          <Pagination.Item key={page - 1} onClick={() => setPage(page - 1)}>
            {page - 1}
          </Pagination.Item>
          <Pagination.Item key={page} active>
            {page}
          </Pagination.Item>
          <Pagination.Item key={page + 1} onClick={() => setPage(page + 1)}>
            {page + 1}
          </Pagination.Item>
          <Pagination.Item key={page + 2} onClick={() => setPage(page + 2)}>
            {page + 2}
          </Pagination.Item>
          <Pagination.Next key={'next'} onClick={() => setPage(page + 1)} />
          <Pagination.Last key={'last'} onClick={() => setPage(lastPage)} />
        </>
      );
      setPaginationItems(items);
    }
    if (page === lastPage - 1) {
      const items = (
        <>
          <Pagination.First key={'first'} onClick={() => setPage(1)} />
          <Pagination.Prev key={'prev'} onClick={() => setPage(page - 1)} />
          <Pagination.Item key={page - 3} onClick={() => setPage(page - 3)}>
            {page - 3}
          </Pagination.Item>
          <Pagination.Item key={page - 2} onClick={() => setPage(page - 2)}>
            {page - 2}
          </Pagination.Item>
          <Pagination.Item key={page - 1} onClick={() => setPage(page - 1)}>
            {page - 1}
          </Pagination.Item>
          <Pagination.Item key={page} active>
            {page}
          </Pagination.Item>
          <Pagination.Item key={page + 1} onClick={() => setPage(page + 1)}>
            {page + 1}
          </Pagination.Item>
          <Pagination.Next key={'next'} onClick={() => setPage(page + 1)} />
          <Pagination.Last key={'last'} onClick={() => setPage(lastPage)} />
        </>
      );
      setPaginationItems(items);
    }
    if (page === lastPage) {
      const items = (
        <>
          <Pagination.First key={'first'} onClick={() => setPage(1)} />
          <Pagination.Prev key={'prev'} onClick={() => setPage(page - 1)} />
          <Pagination.Item key={page - 4} onClick={() => setPage(page - 4)}>
            {page - 4}
          </Pagination.Item>
          <Pagination.Item key={page - 3} onClick={() => setPage(page - 3)}>
            {page - 3}
          </Pagination.Item>
          <Pagination.Item key={page - 2} onClick={() => setPage(page - 2)}>
            {page - 2}
          </Pagination.Item>
          <Pagination.Item key={page - 1} onClick={() => setPage(page - 1)}>
            {page - 1}
          </Pagination.Item>
          <Pagination.Item key={page} active>
            {page}
          </Pagination.Item>
          <Pagination.Next key={'next'} disabled />
          <Pagination.Last key={'last'} disabled />
        </>
      );
      setPaginationItems(items);
    }
  }, [page, lastPage]);

  return (
    <div className="list-page">
      <h2>NHL Players</h2>
      <PlayerList />
      <Pagination>{paginationItems}</Pagination>
    </div>
  );
}
