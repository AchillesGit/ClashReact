import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { increment, decrement } from "../store/exampleSlice";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  const value = useSelector((state: RootState) => state.example.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button>{text}</button>
      <div>
        <h1>{value}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
};

export default Button;
