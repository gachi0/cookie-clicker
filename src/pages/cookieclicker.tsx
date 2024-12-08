import { css } from "../../styled-system/css";
import { Component, createEffect, onCleanup } from "solid-js";
import { Column, Row } from "../components/layout";
import { auto, cookies, getClicks, getCost, RCSum, setAuto, setCookies, setShops, shops } from "../signals";
import { Button, Label } from "../components/button";
import { Shisetsu } from "../components/shisetsu";


const Page: Component = () => {

  createEffect(() => {

    const interval = setInterval(() => {
      setCookies(
        cookies() + (RCSum(auto) / 10n)
      );
    }, 100);

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
    <Button
      children="クッキー"
      style={{ height: "72px", "font-size": "32px" }}
      callback={() => {
        setCookies(cookies() + getClicks(shops));
      }}
    />
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
            setCookies(cookies() - getCost(v));
            setAuto(i, "count", v.count + 1n);
          }}
        />)}
      </Column>
    </Row>
  </Column>;
};

export default Page;