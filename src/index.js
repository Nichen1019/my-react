import React from "./React";

import ReactDOM from "./ReactDom";

// import React, {Component} from "react";
// import ReactDOM from "react-dom";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  counterUp() {
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  }
  render() {
    return (
      <div>
        {this.state.counter}
        <div>
          <button
            onClick={() => {
              this.counterUp();
            }}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

const increment = "increment";
const decrement = "decrement";
function reducer(state, action) {
  switch (action.type) {
    case increment:
      return {count: state.count + 1};
    case decrement:
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Count() {
  const [counter, dispatch] = React.useReducer(reducer, {count: 0});
  const [num, setNum] = React.useState({num: 0});

  return (
    <div>
      <div>{counter.count}</div>
      <div>
        <button onClick={() => dispatch({type: increment})}>+</button>
        <button onClick={() => dispatch({type: decrement})}>-</button>
      </div>
      <div> {num.num}</div>
      <div>
        <button onClick={() => setNum({num: 2})}>2</button>
        <button onClick={() => setNum({num: 1})}>1</button>
        <button
          onClick={() =>
            setNum((state) => {
             return {...state,num: state.num+1}
            })
          }
        >
          1
        </button>
      </div>
    </div>
  );
}

ReactDOM.render(<Count counter="1" />, document.getElementById("root"));
