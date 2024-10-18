import React from "react";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <div>
      <button>{text}</button>
    </div>
  );
};

export default Button;
