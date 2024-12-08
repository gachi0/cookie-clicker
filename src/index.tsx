/* @refresh reload */
import { render, Suspense } from 'solid-js/web';
import { HashRouter, Route, Router } from '@solidjs/router';
import { lazy, ParentComponent } from 'solid-js';
import "./index.css";
import { css } from '../styled-system/css';
import { routes } from './paths';

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

render(() => <HashRouter
  root={App}>
  {Object.entries(routes).map((v) => <Route
    path={v[0]}
    component={lazy(v[1])}
  />)}
</HashRouter>, root!);
