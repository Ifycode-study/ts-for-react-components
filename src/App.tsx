import React, { ReactElement, ReactNode, useState } from 'react';
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
// (The heading prop has a default "My heading")

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

// Functional props
// (Key to remembering how this works: The children function prop here takes in a number and returns a ReactNode)
function TextWithNumber({ header, children }: {
  header: (num: number) => ReactNode,
  children: (num: number) => ReactNode
}) {
  const [state, setState] = useState<number>(1);
  return (
    <div>
      <h2>{header(state)}</h2>
      <div>{children(state)}</div>
      <div>
        <button onClick={() => setState(state + 1)}>Add button</button>
        <button onClick={() => setState(state - 1)}>Subtract button</button>
      </div>
    </div>
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

      <Container heading={<strong>Remove me to see "My heading" displayed</strong>}>Foo</Container>

      <TextWithNumber header={(num: number) => <span>Header {num}</span>}>{(num: number) => <div>Today is {num}</div>}</TextWithNumber>
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