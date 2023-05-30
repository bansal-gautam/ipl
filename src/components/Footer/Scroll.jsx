import React, { useEffect, useState } from "react";
import "./Scroll.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`scroll-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <span>
        Scroll to Top
        <KeyboardArrowUpIcon />
      </span>
    </div>
  );
};

export default Scroll;
