import { FETCH_GAMELIST_RESPONSE } from '@/types/game';
import React from 'react';
import CardList from './CardList';

interface GameListProps {
  title: string;
  description?: string;
  data: FETCH_GAMELIST_RESPONSE;
}

export default function GameList({ title, description, data }: GameListProps) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>

      {/* TODO: Filter */}

      {data.count === 0 ? (
        <p>검색 결과가 없습니다.</p>
      ) : (
        <CardList games={data.results} />
      )}
    </div>
  );
}
