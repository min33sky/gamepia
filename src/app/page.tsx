import { Button } from '@/components/ui/button';
import {
  getTrendingGameList,
  getGameScreenshots,
  SearchOrders,
} from './actions/games.action';
import GameList from '@/components/GameList';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface HomeProps {
  searchParams: {
    [key: string]: string | undefined;
  };
}

export default async function Home({ searchParams }: HomeProps) {
  // console.log('### searchParams : ', searchParams);

  const ordering = (searchParams.ordering || '-relevance') as SearchOrders;

  const gameList = await getTrendingGameList({
    ordering,
  });

  // console.log('### gameList : ', gameList);

  // const gameScreenshots = await getGameScreenshots(28);
  // console.log('### gameScreenshots : ', gameScreenshots);
  if (!gameList) {
    return <div>데이터가 없습니다.</div>;
  }

  return (
    <main>
      <GameList
        title="와우"
        description="설명란"
        data={gameList}
        ordering={ordering}
      />
    </main>
  );
}
