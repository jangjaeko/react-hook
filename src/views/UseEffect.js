import React, { useState, useEffect } from "react";

function UseEffect() {
  const sayHello = () => console.log("hello");
  const [number, setnumber] = useState(0);
  const [aNumber, setaNumber] = useState(0);
  useEffect(sayHello, [number]);
  return (
    <div>
      <div>Hi</div>
      <button onClick={() => setnumber(number + 1)}>{number}</button>
      <button onClick={() => setaNumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
}

export default UseEffect;
