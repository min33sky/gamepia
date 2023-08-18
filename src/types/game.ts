export type FETCH_GAMELIST_RESPONSE = {
  count: number;
  next: string;
  previous: string;
  results: Array<GAME>;
};

export type FETCH_GAME_SCREENSHOTS_RESPONSE = {
  count: number;
  next: string;
  previous: string;
  results: Array<SCREENSHOT>;
};

export type GAME = {
  id: number;
  slug: string;
  name: string;
  released: string;
  metacritic: number;
  background_image: string;
  rating: number;
  ratings_count: number;
  playtime: number;
  platforms: Array<PLATFORM>;
  genres: Array<GENRE>;
  stores: Array<STORE>;
  tags: Array<TAG>;

  // 추가
  description: string;
  website: string;
  developers: Array<DEVELOPER>;
  publishers: Array<PUBLISHER>;
  esrb_rating: ESRB_RATING;
  clip: CLIP;
  screenshots: Array<SCREENSHOT>;
  movies: Array<MOVIE>;
  creators_count: number;
  creators: Array<CREATOR>;
};

export type PLATFORM = {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
};

export type GENRE = {
  id: number;
  name: string;
  slug: string;
};

export type STORE = {
  id: number;
  name: string;
  slug: string;
  domain: string;
};

export type TAG = {
  id: number;
  name: string;
  slug: string;
  language: string;
  games_count: number;
  image_background: string;
};

export type DEVELOPER = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
};

export type PUBLISHER = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
};

export type ESRB_RATING = {
  id: number;
  name: string;
  slug: string;
};

export type CLIP = {
  clip: string;
  clips: {
    320: string;
    640: string;
    full: string;
  };
  video: string;
  preview: string;
};

export type SCREENSHOT = {
  id: number;
  image: string;
  width: number;
  height: number;
  is_deleted: boolean;
};

export type MOVIE = {
  id: number;
  name: string;
  preview: string;
  data: string;
};

export type CREATOR = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
};
