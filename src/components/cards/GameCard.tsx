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

interface GameCardProps {
  game: GAME;
}

export default function GameCard({ game }: GameCardProps) {
  console.log('### game : ', game);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{game.name}</CardTitle>
        <CardDescription>{game.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={game.background_image}
          alt={game.name}
          width={500}
          height={500}
        />

        {/* 메타크리틱 점수 */}
        {game.metacritic && (
          <div className="w-fit rounded-sm text-xs font-bold border border-green-500 text-green-500 py-1 px-2">
            {game.metacritic}
          </div>
        )}

        {/* 평점 */}
        <div className="flex items-center">
          <StarIcon className="w-3 h-3 mr-1 text-yellow-500 fill-yellow-500" />
          <span className="text-xs">{game.rating}</span>
        </div>

        <PlatformList platforms={game.platforms} />

        {/* <div className="flex items-center space-x-2">
          <FaPlaystation className="w-3 h-3 mr-1 text-blue-500 fill-blue-500" />
          <FaXbox className="w-3 h-3 mr-1 text-green-500 fill-green-500" />
          <FaWindows className="w-3 h-3 mr-1 text-gray-500 fill-gray-500" />
          <FaLinux className="w-3 h-3 mr-1 text-gray-500 fill-gray-500" />
        </div> */}
      </CardContent>
      <CardFooter>
        <Button variant={'outline'} className="w-full" asChild>
          <Link href={`/games/${game.id}`}>자세히 보기</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
