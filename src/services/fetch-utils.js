import { client, checkError } from './client.js';

export async function getPlayerData(from, to) {
  const response = await client
    .from('nhl_players')
    .select('*', { count: 'exact' })
    .gte('games_played', 10)
    .range(from, to);

  return { data: response.data, count: response.count };
}

export async function getPlayerById(id) {
  const response = await client.from('nhl_players').select('*').match({ id }).single();

  return checkError(response);
}
