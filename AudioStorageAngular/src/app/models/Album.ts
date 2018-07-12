import Song from './Song';

export default class Album {
  id: number;
  name: string;
  releaseDate: string;
  songs: [Song];
}
