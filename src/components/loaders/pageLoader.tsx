import { ClipLoader } from "react-spinners";

const PageLoader = () => {
  return (
    <div className="w-screen h-screen absolute top-0 bottom-0 right-0 left-0 bg-[#f4f3f3] flex flex-col items-center justify-center">
      <h1 className="text-3xl font-extrabold">Place Pulse</h1>
      <ClipLoader size={27} color="black" />
    </div>
  );
};

export default PageLoader;
