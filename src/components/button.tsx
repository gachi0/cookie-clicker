import { Component, JSX, JSXElement } from "solid-js";
import { css, Styles } from "../../styled-system/css";
import { A } from "@solidjs/router";
import { RouteNames } from "../paths";


const BUTTON_CSS: Styles = {
  borderRadius: 8,
  paddingInline: 3,
  paddingBlock: 1,
  textAlign: "center",
};

const BUTTON_CSS_ENABLE: Styles = {
  ...BUTTON_CSS,
  backgroundColor: "blue.500",
  _hover: {
    backgroundColor: "blue.700",
    cursor: "pointer",
  },
};

const BUTTON_CSS_DISABLE: Styles = {
  ...BUTTON_CSS,
  backgroundColor: "gray.500",
};

export const Button: Component<{
  children: JSXElement;
  disabled?: boolean;
  style?: JSX.CSSProperties;
  callback?: VoidFunction;
}> = (props) => {
  return <button
    disabled={props.disabled}
    class={props.disabled
      ? css(BUTTON_CSS_DISABLE)
      : css(BUTTON_CSS_ENABLE)}
    style={props.style}
    onclick={props.callback}
    children={props.children}
  />;
};


export const Link: Component<{
  href: RouteNames;
  children: JSXElement;
}> = (props) => <A
  class={css(BUTTON_CSS_ENABLE)}
  href={props.href}
  children={props.children}
/>;


export const Label: Component<{
  label: string, txt: string;
}> = (props) => <span>
  <span class={css({
    fontSize: 12,
    marginRight: 1,
  })}>
    {props.label}:
  </span>
  <span class={css({ color: "#aaffff" })}>
    {props.txt}
  </span>
</span>;

