import React from "react";

const Button = (props) => {
  const { label, onClick, type } = props;
  return (
    <button onClick={onClick} type={type}>
      {label}
    </button>
  );
};

export default Button;
