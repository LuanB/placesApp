import React from "react";

export type IActions = {
  type: string;
  [name: string]: any;
};

export type IAsyncActions<A extends IActions, S> = (
  dispatch: React.Dispatch<A> | any,
  state: S
) => void;

export type IAsyncActionsCreator<A extends IActions, S> = (
  ...args: any[]
) => IAsyncActions<A, S>;

export type AsyncDispatch<A extends IActions, S> = (
  action: A | IAsyncActions<A, S>
) => any;

export default function createAsyncDispatch<A extends IActions, S>(
  dispatch: React.Dispatch<A>,
  state: S
): AsyncDispatch<A, S> {
  return async (action: A | IAsyncActions<A, S>) => {
    if (typeof action === "object" && action !== null) {
      return dispatch(action);
    } else if (typeof action === "function") {
      return action(dispatch, state);
    } else {
      console.warn("Actions should be either an object or a function");
    }
  };
}
