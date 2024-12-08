import { Component, Show } from "solid-js";
import { Button, Label } from "./button";
import { Column, Row } from "./layout";
import { cookies, setCookies, setShops, StoreType } from "../signals";

export const Shisetsu: Component<{
  store: StoreType;
  i: number;
}> = (props) => {
  return <Row style={{
    "justify-content": "space-between",
    "gap": "10px",
    "background-color": "#330000",
    "padding": "10px",
  }}>

    <Row style={{ "align-items": "center", "gap": "8px" }}>
      ×{props.store.count.toString()}
      <Column>
        {props.store.name}
        <Label
          label="コスト"
          txt={`-${props.store.cost}`}
        />
        <Row style={{ gap: "6px" }}>
          <Label
            label="クリック"
            txt={`+${props.store.reward}`}
          />
          <Show when={props.store.cps}>
            <Label
              label="時速"
              txt={`+${props.store.cps}`}
            />
          </Show>
        </Row>
      </Column>
    </Row>

    <Button
      children="強化"
      disabled={cookies() < props.store.cost}
      callback={() => {
        console.log(cookies());
        setShops(props.i, "count", props.store.count + 1n);
        setCookies(cookies() - props.store.cost);
      }}
    />

  </Row>;
};
