'use server';

import type {
  FETCH_GAMELIST_RESPONSE,
  FETCH_GAME_SCREENSHOTS_RESPONSE,
} from '@/types/game';
import { revalidatePath } from 'next/cache';

//? API 형식  https://api.rawg.io/api/platforms?key=YOUR_API_KEY

const BASE_URL = 'https://api.rawg.io/api';
const API_KEY = process.env.RAWG_API_KEY;

export type SearchOrders =
  | 'added' // popularity
  | '-added'
  | 'created' // date added
  | '-created'
  | 'name'
  | '-name'
  | 'relevance'
  | '-relevance'
  | 'rating'
  | '-rating'
  | 'released' // release date
  | '-released';

interface GetTrendingParams {
  page?: number;
  pageSize?: number;
  dates?: string;
  ordering?: SearchOrders;
  path?: string;
}

export async function getTrendingGameList({
  page = 1,
  pageSize = 20,
  dates,
  ordering = '-relevance',
  path,
}: GetTrendingParams) {
  try {
    // create SearchParams
    const params = new URLSearchParams();
    params.append('page', String(page));
    params.append('page_size', String(pageSize));
    params.append('ordering', ordering);
    if (dates) params.append('dates', dates);

    // console.log('params', params.toString());

    const response = await fetch(
      `${BASE_URL}/games/lists/main?discover=true&key=${API_KEY}&${params.toString()}`,
    );
    const data = (await response.json()) as FETCH_GAMELIST_RESPONSE;

    // console.log('data: ', data);

    if (path) {
      revalidatePath(path);
    }

    console.log('게임 목록: ', data.results.length);

    if (!data.results) {
      return false;
    }

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
