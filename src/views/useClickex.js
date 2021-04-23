import React, { useStaet, useEffect, useRef } from "react";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      element.current.removeEventListener("click", onClick);
    };
  }, []);
  return element;
};

function useClickex() {
  const sayHello = () => console.log("sayHello");
  const title = useClick(sayHello);
  return (
    <div>
      <h1 ref={title}> hi </h1>
    </div>
  );
}

export default useClickex;
