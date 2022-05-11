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
    <div className="detail-page">
      <Link to="/">Home</Link>
      <div>
        <p>{player.name}</p>
        <p>{player.team}</p>
        <p>Position: {player.position}</p>
        <p>Games Played: {player.games_played}</p>
        <p>Shifts: {player.shifts}</p>
        <p>Minutes: {player.icetime}</p>
      </div>
    </div>
  );
}
