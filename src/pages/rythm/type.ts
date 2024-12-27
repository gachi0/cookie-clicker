type Song = {
  id: number;
  name: string;
  artist: string;
  charts: Chart[];
};

type Chart = {
  id: number;
  name: string;
  lv: number;
};

type SongWithJotai = Song & { selecting?: boolean; };