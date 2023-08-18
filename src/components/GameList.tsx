'use client';

import { FETCH_GAMELIST_RESPONSE } from '@/types/game';
import React from 'react';
import CardList from './CardList';
import Selector from './Selector';

interface GameListProps {
  title: string;
  description?: string;
  data: FETCH_GAMELIST_RESPONSE;
}

export default function GameList({ title, description, data }: GameListProps) {
  console.log('게임 리스트: ', data);

  const sortingOptions = [
    { value: '-relevance', label: '관련성' },
    { value: 'name', label: '이름순' },
  ];

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>

      {/* TODO: Filter */}
      <Selector options={sortingOptions} />

      {data.count === 0 ? (
        <p>검색 결과가 없습니다.</p>
      ) : (
        <CardList games={data.results} />
      )}
    </div>
  );
}
