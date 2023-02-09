import React, { useEffect } from "react";
import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  function countPlus() {
    setCount(count + 1);
    setCount1(count1 + 1);
    console.log(count1);
  }
  function countMinus() {
    setCount(count > 0 ? count - 1 : 0);
  }
  useEffect(() => {
    console.log("state is changed");
  }, [count1]);

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
