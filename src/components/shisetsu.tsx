import { Component, Show } from "solid-js";
import { Button, Label } from "./button";
import { Column, Row } from "./layout";
import { cookies, getCost, ShopType } from "../signals";

export const Shisetsu: Component<{
  store: ShopType;
  onclick: () => void;
}> = (props) => {
  return <Row style={{
    "justify-content": "space-between",
    "gap": "10px",
    "background-color": "#330000",
    "padding": "10px",
  }}>

    <Row style={{ "align-items": "center", "gap": "8px" }}>
      ×{`${props.store.count}`}
      <Column>
        {props.store.name}
        <Label
          label="コスト"
          txt={`-${getCost(props.store)}`}
        />
        <Row style={{ gap: "6px" }}>
          <Label
            label="報酬"
            txt={`+${props.store.reward}`}
          />
        </Row>
      </Column>
    </Row>

    <Button
      children="強化"
      disabled={cookies() < getCost(props.store)}
      callback={props.onclick}
    />

  </Row>;
};
