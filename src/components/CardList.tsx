import { GAME } from '@/types/game';
import React from 'react';
import GameCard from './cards/GameCard';

interface CardListProps {
  games: Array<GAME>;
}

export default function CardList({ games }: CardListProps) {
  console.log('카드리스트: ', games);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}
