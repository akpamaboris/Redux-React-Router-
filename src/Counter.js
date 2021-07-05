import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

import { Link } from "react-router-dom";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <Link to="/test">test page</Link>
    </div>
  );
};

export default Counter;
