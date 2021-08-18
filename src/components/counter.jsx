import React, { Fragment, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const tags = ["tag1", "tag2", "tag3"];
  const formCount = counter === 0 ? "Ноль" : counter;
  const getBageClasses = () => {
    let classes = "badge m-2 bg-";
    classes += counter === 0 ? "danger" : "primary";
    return classes;
  };
  return (
    <Fragment>
      {tags.length === 0 && "Теги не найдены"}
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
      <span className={getBageClasses()}>{formCount}</span>
      <button className="btn btn-secondary btn-sm">Increament</button>
    </Fragment>
  );
};

export default Counter;
