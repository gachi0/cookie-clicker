import { Component } from "solid-js";
import { columnStyle } from "../../components/layout";
import { BUTTON_CSS_ENABLE } from "../../components/button";

export const CurrentSong: Component<Song> = (p) => <div
  style={{ ...columnStyle, gap: "8px" }}
>
  <div>{p.name} / {p.artist}</div>
  <div>
    ここにジャケットが来る
  </div>
  <div>
    {p.charts
      .map((c) => `${c.name}:${c.lv}`)
      .join(", ")}
  </div>
  <button style={{
    ...BUTTON_CSS_ENABLE,
    "background-color": "blueviolet"
  }}>
    プレイ！
  </button>
</div>;