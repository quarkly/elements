import React from 'react';

const QuarkContext = React.createContext();

export const { Provider } = QuarkContext;

export function asQuark(Component) {
  return function ConnectedComponent(props) {
    return (
      <QuarkContext.Consumer>
        {qState => <Component {...props} qState={qState} />}
      </QuarkContext.Consumer>
    );
  };
}
