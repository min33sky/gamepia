import { Button } from '@/components/ui/button';
import {
  getTrendingGameList,
  getGameScreenshots,
} from './actions/games.action';

export default async function Home() {
  const gameList = await getTrendingGameList();

  console.log('### gameList : ', gameList);

  // const gameScreenshots = await getGameScreenshots(28);
  // console.log('### gameScreenshots : ', gameScreenshots);

  return (
    <main>
      <Button>Hello</Button>
    </main>
  );
}
