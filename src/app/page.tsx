import { Button } from '@/components/ui/button';
import {
  getTrendingGameList,
  getGameScreenshots,
} from './actions/games.action';
import GameCard from '@/components/cards/GameCard';
import GameList from '@/components/GameList';

export default async function Home() {
  const gameList = await getTrendingGameList({});

  console.log('### gameList : ', gameList);

  // const gameScreenshots = await getGameScreenshots(28);
  // console.log('### gameScreenshots : ', gameScreenshots);

  return (
    <main>
      <GameList title="와우" description="설명란" data={gameList} />
    </main>
  );
}
