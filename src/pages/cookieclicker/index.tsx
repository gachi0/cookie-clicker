import { css } from "../../../styled-system/css";
import { Component, createEffect, onCleanup } from "solid-js";
import { Column, Row } from "../../components/layout";
import { auto, cookies, getClicks, getCost, RCSum, setAuto, setCookies, setShops, shops } from "./signals";
import { KyokaButton, Label, Shisetsu } from "./shisetsu";
import { BUTTON_CSS_ENABLE } from "../../components/button";

const Page: Component = () => {

  createEffect(() => {

    const interval = setInterval(
      () => setCookies(c => c + RCSum(auto)),
      1000
    );

    onCleanup(() => {
      clearInterval(interval);
    });

  });

  return <Column style={{ gap: "8px" }}>
    <Row style={{ gap: "8px" }}>
      <Label
        label="クリック"
        txt={getClicks(shops).toString()}
      />
      <Label
        label="時速"
        txt={RCSum(auto).toString()}
      />
    </Row>
    <p class={css({ fontSize: 50 })}>
      {cookies().toString()}
    </p>
    <button
      style={{
        ...BUTTON_CSS_ENABLE, height: "72px", "font-size": "32px",
      }}
      onclick={() => {
        setCookies(cookies() + getClicks(shops));
      }}
    >クッキー</button>
    <Row style={{ gap: "8px" }}>
      <Column>
        <p class={css({ fontSize: "24px" })}>クリック強化</p>
        {shops.map((v, i) => <Shisetsu
          store={v}
          onclick={() => {
            setCookies(cookies() - getCost(v));
            setShops(i, "count", v.count + 1n);
          }}
        />)}
      </Column>
      <Column>
        <p class={css({ fontSize: "24px" })}>時速強化</p>
        {auto.map((v, i) => <Shisetsu
          store={v}
          onclick={() => {
            setCookies(c => c - getCost(v));
            setAuto(i, "count", v.count + 1n);
          }}
        />)}
      </Column>
    </Row>

  </Column>;
};

export default Page;