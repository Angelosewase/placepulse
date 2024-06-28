import logo from "/logo-text.png";

const Brand = () => {
  return (
    <div className="flex gap-2">
      <img src={logo} alt="logo" className="w-30 h-7 " />
      <h1
        className="text-xl font-extrabold ml-[-0.6rem] mt-1"
        style={{ fontFamily: "Playwrite AU VIC" }}
      >
        lacePulse
      </h1>
    </div>
  );
};
export default Brand;
