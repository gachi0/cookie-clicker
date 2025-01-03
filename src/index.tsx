/* @refresh reload */
import { render } from 'solid-js/web';
import { HashRouter, Route } from '@solidjs/router';
import { lazy, ParentComponent } from 'solid-js';
import "./index.css";
import { BAR_HEIGHT, routes } from './consts';
import { columnStyle } from './components/layout';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

const App: ParentComponent = (props) => <div
  style={{
    ...columnStyle, 'background': "#111122",
  }}
>
  <header
    style={{
      height: `${BAR_HEIGHT}px`,
      background: "#113388",
      'display': 'flex',
      "justify-content": "space-around",
      "align-items": "center",
    }}
  >
    <a href={'/'}>TOP</a>
    <a href={'/cookie'}>クッキーを増やす</a>
    <a href={'/rythm'}>リズムゲーム</a>
  </header>

  <main style={{ 'display': "flex", "justify-content": "center" }}>
    {props.children}
  </main>

</div>;

render(() => <HashRouter
  root={App}>
  {Object.entries(routes).map(([path, component]) => <Route
    path={path}
    component={lazy(component)}
  />)}
</HashRouter>, root!);
