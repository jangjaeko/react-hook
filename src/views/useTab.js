import React, { useState } from "react";
import ReactDOM from "react-router-dom";

const content = [
  {
    tab: "section 1",
    content: "I'm the content of the Section 1",
  },
  {
    tab: "section 2",
    content: "I'm the content of the Section 2",
  },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);

  return {
    currentItem: allTabs[currentIndex],
    changeitem: setCurrentIndex,
  };
};

const useTab = () => {
  const { currentItem, changeitem } = useTabs(0, content);

  return (
    <div style={{ textAlign: "center" }}>
      {content.map((section, index) => (
        <button onClick={() => changeitem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default useTab;
