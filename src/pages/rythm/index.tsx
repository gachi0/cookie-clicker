import { Component, createSignal } from "solid-js";
import { Column, Row } from "../../components/layout";
import { songs } from "./data";
import { SongItem } from "./song";
import { CurrentSong } from "./currntsong";
import { createStore } from "solid-js/store";


const SongSelect: Component = () => {

  let [selectingI, setSelectingI] = createSignal(0);
  const [stSongs, setSongs] = createStore<Song[]>(songs);

  return <Row style={{ gap: "16px" }}>
    <Column style={{ gap: "6px", width: "460px" }}>{
      stSongs.map((s, i) => SongItem({
        song: { ...s, selecting: selectingI() === i },
        onClick: () => setSelectingI(i)
      }))
    }</Column>
    <CurrentSong {...stSongs[selectingI()]} />
  </Row>;
};


export default SongSelect;;