import React from 'react';
import { Link } from 'react-router-dom';

export default function Player({ player }) {
  return (
    <tr>
      <td>{player.team}</td>
      <td>
        <Link to={`/player/${player.id}`}>{player.name}</Link>
      </td>
    </tr>
  );
}
