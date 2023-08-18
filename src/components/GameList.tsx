'use client';

import { FETCH_GAMELIST_RESPONSE } from '@/types/game';
import React from 'react';
import CardList from './CardList';
import Selector from './Selector';
import LoadMore from './LoadMore';
import { SearchOrders } from '@/app/actions/games.action';

interface GameListProps {
  title: string;
  description?: string;
  data: FETCH_GAMELIST_RESPONSE;
  ordering?: SearchOrders;
}

export default function GameList({
  title,
  description,
  data,
  ordering,
}: GameListProps) {
  // console.log('게임 리스트: ', data);

  const sortingOptions = [
    { value: '-relevance', label: '관련성' },
    { value: 'name', label: '이름순' },
  ];

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>

      <Selector options={sortingOptions} />

      {data.count === 0 ? (
        <p>검색 결과가 없습니다.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <CardList games={data.results} />
          <LoadMore hasNextPage={!!data.next} ordering={ordering} />
        </div>
      )}
    </div>
  );
}
