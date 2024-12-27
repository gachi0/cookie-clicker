import { Component, JSX, JSXElement, ParentComponent } from "solid-js";
import { css, Styles } from "../../styled-system/css";
import { A } from "@solidjs/router";
import { RouteNames } from "../paths";


export const BUTTON_CSS: JSX.CSSProperties = {
  "border-radius": "8px",
  "padding-inline": "3px",
  "padding-block": "1px",
  "text-align": "center",
};

export const BUTTON_CSS_ENABLE: JSX.CSSProperties = {
  ...BUTTON_CSS, "background-color": "slateblue",
};

export const BUTTON_CSS_DISABLE: JSX.CSSProperties = {
  ...BUTTON_CSS, "background-color": "gray",
};

export const LinkURL: ParentComponent<{
  href: string;
}> = (props) => <A
  style={BUTTON_CSS_ENABLE}
  href={props.href}
  children={props.children}
/>;

export const Link: ParentComponent<{
  href: RouteNames;
}> = (p) => <LinkURL {...p} />;

