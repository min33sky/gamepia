import { GAME } from '@/types/game';
import React from 'react';
import GameCard from './cards/GameCard';

interface CardListProps {
  games: Array<GAME>;
}

export default function CardList({ games }: CardListProps) {
  // console.log('카드리스트: ', games);

  return (
    <>
      {games?.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </>
  );
}
