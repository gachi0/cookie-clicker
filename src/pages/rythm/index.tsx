import { Component, createSignal } from "solid-js";
import { Column, Row } from "../../components/layout";
import { songs } from "./data";
import { SongItem } from "./song";
import { CurrentSong } from "./currntsong";

const SongSelect: Component = () => {

  const [selectingI, setSelectingI] = createSignal(0);

  return <Row style={{ gap: "16px" }}>
    <Column style={{ gap: "6px", width: "460px" }}>{
      songs.map((song, i) => <SongItem
        song={song} selecting={selectingI() === i}
        onClick={() => setSelectingI(i)}
      />)
    }</Column>
    <CurrentSong {...songs[selectingI()]} />
  </Row>;
};


export default SongSelect;