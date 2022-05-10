import { client, checkError } from './client.js';

export async function getPlayerData(from, to) {
  const response = await client
    .from('nhl_players')
    .select('*')
    .gte('games_played', 10)
    .range(from, to);

  return checkError(response);
}
