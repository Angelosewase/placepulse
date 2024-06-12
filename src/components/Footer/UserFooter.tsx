const UserFooter = () => {
  return (
    <div className="w-full pt-[4vh] pb-[15vh] px-10  bg-[#396ff965] rounded-t-3xl relative">
      <div>
        <h1 className="text-2xl font-extrabold">Place Pulse</h1>
        <h6 className="mt-4 font-light">Copyright Place Pulse 2024</h6>
      </div>

      <div className="absolute bottom-4 right-5">
        <h1>
          Powered By{" "}
          <a
            href="https://www.linkedin.com/in/nyiringabo-david-455990259"
            target="_blank"
            className="text-[#0075FF] font-extrabold"
          >
            David NYIRINGABO
          </a>
        </h1>
      </div>
    </div>
  );
};

export default UserFooter;
