import React from 'react';
import { Table } from 'react-bootstrap';
import Player from './Player';

export default function PlayerList({ players }) {
  return (
    <div className="player-list">
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, i) => {
            <Player key={player + i} player={player} />;
          })}
        </tbody>
      </Table>
    </div>
  );
}
