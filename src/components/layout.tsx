import { Component, JSX, JSXElement } from "solid-js";
import { css } from "../../styled-system/css";


type LeyoutBasePropType = {
  children: JSXElement;
  style?: JSX.CSSProperties;
};


export const Column: Component<
  LeyoutBasePropType
> = (props) => <div
  class={css({
    display: "flex",
    flexDirection: "column",
  })}
  style={props.style}
>
  {props.children}
</div>;


export const Row: Component<
  LeyoutBasePropType
> = (props) => <div
  class={css({
    display: "inline-flex",
  })}
  style={props.style}
>
  {props.children}
</div>;