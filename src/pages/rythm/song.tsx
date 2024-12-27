import { Component } from "solid-js";
import { columnStyle } from "../../components/layout";

export const SongItem: Component<{
  song: SongWithJotai;
  onClick: () => void;
}> = (p) => <div
  role="button"
  onclick={p.onClick}
  style={{
    ...columnStyle,
    background: p.song.selecting ? "darkblue" : undefined,
    border: "solid 1px",
    padding: "8px"
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
      <div
        style={{ "font-size": "12px" }}
      >{c.name}</div>
      <div style={{ "font-size": "18px" }}>{c.lv}</div>
    </div>)}
  </div>

</div>;