import WebFooter from "../../components/website/Footer";
import WebNavbar from "../../components/website/Navbar";

const WebLayout = ({ children }: { children: React.ReactElement }) => {
  return (
    <div className="flex flex-col bg-[#FFF]">
      <WebNavbar />
      {children}
      <WebFooter />
    </div>
  );
};

export default WebLayout;
