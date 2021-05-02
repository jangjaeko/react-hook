import React, { useEffect, useState } from "react";

const useBeforLeave = (onBefore) => {
  const hadle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", hadle);
    return () => document.removeEventListener("mouseleave", hadle);
  }, []);
};

function BeforeLeave() {
  const begForLife = () => console.log("plz dont leave");
  useBeforLeave(begForLife);
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}

export default BeforeLeave;
