/* @refresh reload */
import { render, Suspense } from 'solid-js/web';
import { Route, Router } from '@solidjs/router';
import { Component, lazy, ParentComponent } from 'solid-js';
import "./index.css";
import { css } from '../styled-system/css';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

const App: ParentComponent = (props) => <>
  <main class={css({
    backgroundColor: "gray.900",
    display: "flex",
    justifyContent: "center",
  })}>
    {props.children}
  </main>

</>;

render(() => <Router
  base='cookie-clicker'
  root={App}>

  <Route
    path="/"
    component={lazy(() => import("./pages/top"))}
  />
  <Route
    path="/cookie/"
    component={lazy(() => import("./pages/cookieclicker"))}
  />





</Router>, root!);
