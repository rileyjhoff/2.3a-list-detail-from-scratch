import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getPlayerById } from '../services/fetch-utils';

export default function DetailPage() {
  const params = useParams();
  const [player, setPlayer] = useState({});

  useEffect(() => {
    async function fetch() {
      const selectedPlayer = await getPlayerById(params.id);
      setPlayer(selectedPlayer);
    }
    fetch();
  }, [params.id]);

  return (
    <div>
      <Link to="/">Home</Link>
      {console.log(player)};
    </div>
  );
}
