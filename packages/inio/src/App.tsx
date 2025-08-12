import { Component, Show } from 'solid-js';

const App: Component<{ name?: string }> = (props) => {
  return (
    <div>
      <h1>Hello {props.name ?? 'Solid'}</h1>
      <p data-testid="tagline">The lightweight, reactive UI library.</p>
      <Show when={true}>
        <p>This is a simple Solid.js application.</p>
      </Show>
    </div>
  );
};

export default App;
