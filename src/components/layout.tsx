import { JSX, ParentComponent } from "solid-js";
import { css } from "../../styled-system/css";


type LeyoutBasePropType = {
  style?: JSX.CSSProperties;
};


export const Column: ParentComponent<
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


export const Row: ParentComponent<
  LeyoutBasePropType
> = (props) => <div
  class={css({
    display: "inline-flex",
  })}
  style={props.style}
>
  {props.children}
</div>;

export const columnStyle = {
  "display": "flex",
  "flex-direction": "column",
} as const;