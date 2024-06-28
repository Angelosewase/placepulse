import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling
    });
  };

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed z-50 animate-bounce py-4 px-4 rounded-full bottom-4 right-8 bg-blue-600 flex items-center justify-center"
        >
          <ArrowUp color="white" size={20} />
        </button>
      )}
    </div>
  );
};

export default ScrollButton;
