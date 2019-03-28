import React from 'react';

const QuarkContext = React.createContext();

export const { Provider } = QuarkContext;

export function asQuark(Component) {
  return React.forwardRef((props, ref) => {
    return (
      <QuarkContext.Consumer>
        {qState => <Component {...props} ref={ref} qState={qState} />}
      </QuarkContext.Consumer>
    );
  });
}
