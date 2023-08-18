'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { Spinner } from './Spinner';
import { useInView } from 'react-intersection-observer';
import { SearchOrders, getTrendingGameList } from '@/app/actions/games.action';
import { GAME } from '@/types/game';
import CardList from './CardList';

interface LoadMoreProps {
  hasNextPage: boolean;
  ordering?: SearchOrders;
}

export default function LoadMore({ hasNextPage, ordering }: LoadMoreProps) {
  const { ref, inView } = useInView();
  const [page, setPage] = useState(1);
  const [games, setGames] = useState<GAME[]>([]);

  const loadMore = useCallback(async () => {
    if (hasNextPage) {
      const newPage = page + 1;
      const games = await getTrendingGameList({
        page: newPage,
        ordering,
      });

      if (!!games) {
        setGames((prev) => [...prev, ...games.results!]);
        setPage(newPage);
      }
    }
  }, [hasNextPage, ordering, page]);

  useEffect(() => {
    if (inView) {
      loadMore();
      console.log('더 불러 옵니다...');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  useEffect(() => {
    if (ordering) {
      setGames([]);
      setPage(1);
    }
  }, [ordering]);

  return (
    <>
      <CardList games={games} />
      <div
        ref={ref}
        className="flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4"
      >
        <Spinner />
      </div>
    </>
  );
}
