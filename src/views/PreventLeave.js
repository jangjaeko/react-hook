import React from "react";

const usePreventLeave = () => {
  const listenr = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listenr);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listenr);

  return { enablePrevent, disablePrevent };
};

function PreventLeave() {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unportect</button>
    </div>
  );
}

export default PreventLeave;
