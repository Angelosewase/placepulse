import { ArrowUp } from "lucide-react";

const ScrollButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  // const height = window.
  // console.log(height)
  return (
    <div>
      <button
        onClick={scrollToTop}
        className="fixed z-50 animate-bounce py-4 px-4 rounded-full bottom-4 right-8 bg-blue-600 flex items-center justify-center"
      >
        <ArrowUp color="white" size={20} />
      </button>
    </div>
  );
};
export default ScrollButton;
