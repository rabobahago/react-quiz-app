import { useReducer } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return {
        ...state,
        count: state.count + state.step,
      };
    case "dec":
      return {
        ...state,
        count: state.count - state.step,
      };
    case "setCount":
      return {
        ...state,
        count: action.payload,
      };
    case "setStep":
      return {
        ...state,
        step: action.payload,
      };
    case "reset":
      return {
        ...state,
        count: 0,
        step: 0,
      };
    default:
      throw new Error("Unknown Action");
  }
}
const initialState = { count: 0, step: 1 };
function DateCounter() {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;
  // This mutates the date object.
  const date = new Date("june 21 2027");
  // date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "dec" });
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
  };

  const inc = function () {
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
    dispatch({ type: "inc" });
  };

  const defineCount = function (e) {
    // setCount(Number(e.target.value));
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: "reset", payload: 0 });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{state.step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
