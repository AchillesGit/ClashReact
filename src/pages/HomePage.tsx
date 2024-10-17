import React from "react";
import Button from "../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { increment, decrement } from "../store/exampleSlice";

const HomePage: React.FC = () => {
  const value = useSelector((state: RootState) => state.example.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Welcome to My Game</h1>
      <Button text="Start Game" />
      <div>
        <h1>{value}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
};

export default HomePage;
