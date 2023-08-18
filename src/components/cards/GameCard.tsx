'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { GAME } from '@/types/game';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import { StarIcon } from 'lucide-react';
import { FaPlaystation, FaXbox, FaWindows, FaLinux } from 'react-icons/fa';
import PlatformList from '../PlatformList';
import { cn } from '@/lib/utils';

interface GameCardProps {
  game: GAME;
}

export default function GameCard({ game }: GameCardProps) {
  // console.log('### game : ', game);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{game.name}</CardTitle>
        <CardDescription>{game.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {game.background_image && (
          <Image
            src={game.background_image}
            alt={game.name}
            width={200}
            height={200}
            priority
          />
        )}

        {/* 메타크리틱 점수 */}
        {game.metacritic && (
          <div
            className={cn(
              'w-fit rounded-sm text-sm border font-bold py-1 px-2',
              game.metacritic >= 75
                ? 'border-green-500 text-green-500'
                : game.metacritic >= 50
                ? 'border-yellow-500 text-yellow-500'
                : 'border-red-500 text-red-500',
            )}
          >
            {game.metacritic}
          </div>
        )}

        {/* 평점 */}
        <div className="flex items-center">
          <StarIcon className="w-3 h-3 mr-1 text-yellow-500 fill-yellow-500" />
          <span className="text-sm">{game.rating}</span>
        </div>

        <PlatformList platforms={game.platforms} />
      </CardContent>
      <CardFooter>
        <Button variant={'outline'} className="w-full" asChild>
          <Link href={`/games/${game.id}`}>자세히 보기</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
