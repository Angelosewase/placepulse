import { useNavigate } from "react-router-dom";
import UserNavbar from "../../components/Navbar/UserNavbar";
import WebFooter from "../../components/website/Footer";
import WebNavbar from "../../components/website/Navbar";
import cookie from "react-cookies";
const WebLayout = ({ children }: { children: React.ReactElement }) => {
  const navigate = useNavigate();
  const authToken = cookie.load("auth_token");
  if (authToken && cookie.load("Otate") && cookie.load("auth_USER")) {
    navigate(`/_${cookie.load("auth_USER").toLowerCase()}/home`);
  }
  return (
    <div className="flex flex-col bg-[#FFF]">
      {authToken ? <UserNavbar /> : <WebNavbar />}
      {children}
      <WebFooter />
    </div>
  );
};

export default WebLayout;
