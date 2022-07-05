import React, { useReducer } from "react";

//funkcija reducer koja prati ono sta se desava u state-u
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

export default function ReducerState() {
  //standard za reduceState jeste da moramo da postavimo konstantu [] a u njoj mozemo staviti ceo objekat

  //useReducer mozemo koristiti kako bi smanjili statove jer mozemo u jednom state-u napisati nekoliko radnji

  //funkcija reducer-inicijalizujemo u funkciji count i showText
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: true,
  });

  return (
    <div>
          <h1>{ state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        Klikni ovde
      </button>
      {state.showText && <p>This is a text</p>}
    </div>
  );
}
