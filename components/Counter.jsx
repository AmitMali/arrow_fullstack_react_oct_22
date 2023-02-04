import React from "react";
import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(10);

  function countPlus() {
    setCount(count + 3);
  }
  function countMinus() {
    setCount(count > 0 ? count - 1 : 0);
  }

  return (
    <div>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-danger" onClick={countMinus}>
          -
        </button>
        <button type="button" className="btn mx-3 btn-primary">
          {count}
        </button>
        <button type="button" className="btn btn-success" onClick={countPlus}>
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
