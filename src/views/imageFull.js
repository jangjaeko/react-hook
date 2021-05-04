import React, { useState, useEffect, useRef } from "react";
import { isElementOfType } from "react-dom/test-utils";

const useFullscreen = () => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
  };
  return { element, triggerFull, exitFull };
};

function ImageFull() {
  const { element, triggerFull, exitFull } = useFullscreen();
  return (
    <div>
      <div ref={element}>
        <img
          src="http://item.ssgcdn.com/02/78/28/item/1000061287802_i6_1200.jpg"
          style={{ height: "500px" }}
        />
        <button onClick={exitFull}>exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>make fullscreen</button>
    </div>
  );
}

export default ImageFull;
