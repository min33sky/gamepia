'use server';

import type {
  FETCH_GAMELIST_RESPONSE,
  FETCH_GAME_SCREENSHOTS_RESPONSE,
} from '@/types/game';

//? API 형식  https://api.rawg.io/api/platforms?key=YOUR_API_KEY

const BASE_URL = 'https://api.rawg.io/api';
const API_KEY = process.env.RAWG_API_KEY;

export async function getTrendingGameList(page: number = 1) {
  try {
    const response = await fetch(
      `${BASE_URL}/games/lists/main?discover=true&key=${API_KEY}&page=${page}`,
    );
    const data = (await response.json()) as FETCH_GAMELIST_RESPONSE;
    return data;
  } catch (error) {
    throw new Error(`getGameList Error: ${error}`);
  }
}

export async function getGameScreenshots(id: number) {
  try {
    const response = await fetch(
      `${BASE_URL}/games/${id}/screenshots?key=${API_KEY}`,
    );
    const data = (await response.json()) as FETCH_GAME_SCREENSHOTS_RESPONSE;
    return data;
  } catch (error) {
    throw new Error(`getGameScreenshots Error: ${error}`);
  }
}
