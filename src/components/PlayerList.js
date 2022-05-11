import React from 'react';
import { Table } from 'react-bootstrap';
import Player from './Player';

export default function PlayerList({ players }) {
  return (
    <div className="player-list">
      <Table>
        <thead>
          <tr>
            <th>Team</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, i) => (
            <Player key={i} player={player} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}
