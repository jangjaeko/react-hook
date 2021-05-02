import React, { useEffect, useRef } from "react";

const useFadeIn = (duration = 1) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s`;
      current.style.opacity = 1;
    }
  }, []);

  return { ref: { element }, style: { opacity: 0.1 } };
};
function FadeIn() {
  const fadeInH1 = useFadeIn(3);
  const fadeInP = useFadeIn(5);
  return (
    <div>
      <h1 {...fadeInH1}>hello</h1>
      <p {...fadeInP}>kkkkkkkk</p>
    </div>
  );
}

export default FadeIn;
