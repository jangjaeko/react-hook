import React, { useState, useEffect } from "react";

const useTitle = (initialTilte) => {
  const [title, setTitle] = useState(initialTilte);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};
function useTitleex() {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("HOME"), 5000);
  return <div>hell in a cell</div>;
}

export default useTitleex;
