import React, { useRef, useEffect } from "react";
import "./MainPageStyle.css";
import { gsap } from "gsap";

function MainPictures(props) {
  let line = useRef(null);

  useEffect(() => {
    gsap.from(line, 0.8, {
      delay: 0.8,
      ease: "power3.out",
      y: "100vh",
      stagger: {
        amount: 0.15,
      },
    });
  }, [line]);

  return (
    <div
      ref={(el) => (line = el)}
      className="mainPictures"
      style={{
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
}

export default MainPictures;
