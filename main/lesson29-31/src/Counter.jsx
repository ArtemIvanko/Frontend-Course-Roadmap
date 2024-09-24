import { useDispatch, useSelector } from "react-redux";

export const Counter = () => {
  const dispatch = useDispatch();
  const increment = () => dispatch({ type : "INCREMENT" });
  const decrement = () => dispatch({ type : "DECREMENT" });
  const count = useSelector((state) => state.count);

  return (
    <div>
      <h1>Redux Counter</h1>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
