import { Component, Show } from "solid-js";
import { Column, Row } from "../../components/layout";
import { cookies, getCost, ShopType } from "./signals";
import { BUTTON_CSS_DISABLE, BUTTON_CSS_ENABLE } from "../../components/button";

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

    <KyokaButton
      label="強化"
      disabled={cookies() < getCost(props.store)}
      onclick={props.onclick}
    />

  </Row>;
};

export const KyokaButton: Component<{
  label: string;
  disabled: boolean;
  onclick: () => void;
}> = (p) => <button
  disabled={p.disabled}
  style={{
    ...(p.disabled ? BUTTON_CSS_DISABLE : BUTTON_CSS_ENABLE),
    "padding-inline": "12px",
  }}
  onclick={p.onclick}
>
  {p.label}
</button>;

export const Label: Component<{
  label: string, txt: string;
}> = (props) => <span>
  <span style={{ "font-size": "12px", "margin-right": "1px" }}>
    {props.label}:
  </span>
  <span style={{ color: "#aaffff" }}>
    {props.txt}
  </span>
</span>;

