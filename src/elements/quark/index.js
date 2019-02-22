import React from "react";

const QuarkContext = React.createContext();

export const Provider = QuarkContext.Provider;

export function asQuark(Component) {
    return function ConnectedComponent(props) {
      return (
        <QuarkContext.Consumer>
          {qState => console.log(qState) || <Component {...props} qState={qState}/>}
        </QuarkContext.Consumer>
      );
    }
  }