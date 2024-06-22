/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useNavigate } from "react-router-dom";
import UserNavbar from "../../components/Navbar/UserNavbar";
import WebFooter from "../../components/website/Footer";
import WebNavbar from "../../components/website/Navbar";
// import cookie from "react-cookies";
import { useSelector } from "react-redux";
const WebLayout = ({ children }: { children: React.ReactElement }) => {
  // const navigate = useNavigate();
  // const authToken = cookie.load("auth_token");
  const { isLoggedIn } = useSelector((state: any) => state.auth);
  // if (authToken && cookie.load("Otate") && cookie.load("auth_USER")) {
  //   navigate(`/_${cookie.load("auth_USER").toLowerCase()}/home`);
  // }
  return (
    <div className="flex flex-col bg-[#FFF]">
      {isLoggedIn ? <UserNavbar /> : <WebNavbar />}
      {children}
      <WebFooter />
    </div>
  );
};

export default WebLayout;
