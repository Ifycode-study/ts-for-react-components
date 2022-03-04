import React, { ReactElement, ReactNode } from 'react';
import './App.css';

// Conventional props
function Heading({ title }: { title: string }) {
  return (
    <h1>{title}</h1>
  );
}

function HeadingWithChildrenString({ children }: { children: string }) {
  return (
    <h1>{children}</h1>
  );
}

function HeadingWithChildrenElement({ children }: { children: ReactNode }): ReactElement {
  return (
    <h1>{children}</h1>
  );
}

function App() {
  return (
    <div className="App">
      <Heading title="Sweet TS heading!"></Heading>
      <HeadingWithChildrenString>
        Children Header
      </HeadingWithChildrenString>
      <HeadingWithChildrenElement>
        <strong>Strong children header</strong>
      </HeadingWithChildrenElement>
    </div>
  );
}

export default App;
