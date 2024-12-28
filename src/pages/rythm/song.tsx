import { Component, For } from "solid-js";
import { columnStyle } from "../../components/layout";

export const SongItem: Component<{
  song: Song;
  selecting: boolean,
  onClick: () => void;
}> = (p) => <div
  role="button"
  onClick={p.onClick}
  style={{
    ...columnStyle,
    background: p.selecting ? "darkblue" : undefined,
    border: "solid 1px",
    padding: "8px",
  }}
>

  <div style={{ "font-size": "24px" }}>
    {p.song.name}
  </div>

  <div style={{ "text-align": "right" }}>
    {p.song.artist}
  </div>

  <div style={{
    "display": "flex",
    gap: "8px",
    "text-align": "center",
  }}>
    {p.song.charts.map(c => <div>
      <div style={{ "font-size": "12px" }}>{c.name}</div>
      <div style={{ "font-size": "18px" }}>{c.lv}</div>
    </div>)}
  </div>

</div>;

export const SongItems: Component<{
  songs: Song[],
  selectI: number,
  onSongClick: (s: Song, i: number) => void;
}> = (p) => <div
  style={{ ...columnStyle, gap: "6px", }}
>
  {p.songs.map((s, i) => <SongItem
    song={s}
    selecting={p.selectI === i}
    onClick={() => p.onSongClick(s, i)}
  />)}
</div>;