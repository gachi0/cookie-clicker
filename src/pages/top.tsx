import { css } from "../../styled-system/css";
import { Component } from "solid-js";
import { Column } from "../components/layout";
import { Link } from "../components/button";


const Page: Component = () => {


  return <Column style={{ gap: "8px" }}>
    <h1>COOKIE CLICKER</h1>
    <Link href="/cookie" children="クッキー" />
    <Link href="/" children="メニュー" />
    <Link href="https://google.com" children="辞める" />
  </Column>;
};

export default Page;