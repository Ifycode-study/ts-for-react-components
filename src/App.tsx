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

// Default props
// (The heading prop has a default in it - don't understand this though)

const defaultContainerProps = {
  heading: <strong> My heading</strong>
}

type ContainerProps = { children: ReactNode } & typeof defaultContainerProps;

function Container({ heading, children }: ContainerProps): ReactElement {
  return (
    <div>
      <h1>{heading}</h1>
      {children}
    </div>
  )
}

Container.defaultProps = defaultContainerProps;

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

      <Container>Foo</Container>
    </div>
  );
}

export default App;


// default props (previous)

// const defaultContainerProps = {
//   heading: <strong> My heading</strong>
// }
// function Container({ heading, children }: { children: ReactNode } & typeof defaultContainerProps): ReactElement {
//   return (
//     <div>
//       <h1>{heading}</h1>
//       {children}
//     </div>
//   )
// }