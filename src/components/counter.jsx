import React, { Fragment, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const formCount = counter === 0 ? "Ноль" : counter;
  const getBageClasses = () => {
    let classes = "badge m-2 bg-";
    classes += counter === 0 ? "danger" : "primary";
    return classes;
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <Fragment>
      <span className={getBageClasses()}>{formCount}</span>
      <button
        onClick={() => {
          handleIncrement({ id: 1 });
        }}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>
      <button
        onClick={() => {
          handleDecrement({ id: 2 });
        }}
        className="btn btn-secondary btn-sm"
      >
        Decrement
      </button>
    </Fragment>
  );
};

export default Counter;
