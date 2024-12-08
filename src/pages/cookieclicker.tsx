import { css } from "../../styled-system/css";
import { Component, createEffect, onCleanup } from "solid-js";
import { Column, Row } from "../components/layout";
import { cookies, getAllCps, getClicks, setCookies, shops } from "../signals";
import { Button, Label } from "../components/button";
import { Shisetsu } from "../components/shisetsu";


const Page: Component = () => {

  createEffect(() => {

    const interval = setInterval(() => {
      setCookies(
        cookies() + (getAllCps(shops) / 10n)
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
        txt={getAllCps(shops).toString()}
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
    {shops.map((v, i) => <Shisetsu store={v} i={i} />)}
  </Column>;
};

export default Page;