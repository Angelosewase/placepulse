import UserNavbar from "../../components/Navbar/UserNavbar";
import WebFooter from "../../components/website/Footer";
import WebNavbar from "../../components/website/Navbar";
import cookie from "react-cookies";
const WebLayout = ({ children }: { children: React.ReactElement }) => {
  const authToken = cookie.load("auth_token");
  console.log("auth token", authToken);
  return (
    <div className="flex flex-col bg-[#FFF]">
      {authToken ? <UserNavbar /> : <WebNavbar />}
      {children}
      <WebFooter />
    </div>
  );
};

export default WebLayout;
