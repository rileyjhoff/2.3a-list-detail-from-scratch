import { client, checkError } from './client.js';

export async function getPlayerData() {
  const response = await client.from('nhl_players').select('*').gte('games_played', 10);

  return checkError(response);
}
