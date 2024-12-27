import { Component } from "solid-js";
import { columnStyle } from "../../components/layout";

export const CurrentSong: Component<Song> = (p) => <div
  style={{
    ...columnStyle,
    width: "300px",
  }}
>
  <div>{p.name} / {p.artist}</div>
  <div>{p.charts
    .map((c) => `${c.name}:${c.lv}`)
    .join(", ")
  }</div>
  <button style={{
    "background-color": "blueviolet"
  }}>
    プレイ！
  </button>
</div>;