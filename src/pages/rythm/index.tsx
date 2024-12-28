import { Component, createSignal, JSX } from "solid-js";
import { columnStyle } from "../../components/layout";
import { songs } from "./data";
import { SongItem, SongItems } from "./song";
import { CurrentSong } from "./currntsong";
import { BAR_HEIGHT } from "../../consts";

const flexRatio = (grow: number): JSX.CSSProperties => ({
  "flex-grow": grow,
  'flex-basis': 0,
});

const SongSelect: Component = () => {

  const [selectingI, setSelectingI] = createSignal(0);

  return <div style={{
    display: "inline-flex", width: "100%",
    height: `calc(100vh - ${BAR_HEIGHT}px)`,
    padding: "16px", gap: "16px",
  }}>


    <div style={{
      ...flexRatio(6),
      'overflow-y': 'scroll',
    }}>
      <SongItems
        songs={songs}
        selectI={selectingI()}
        onSongClick={(_, i) => setSelectingI(i)}
      />
    </div>

    <div style={flexRatio(3)}>
      <CurrentSong {...songs[selectingI()]} />
    </div>

  </div>;
};


export default SongSelect;