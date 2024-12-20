/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import cookie from "react-cookies";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGOUT_SUCCESS } from "../../actions/AuthActions";
import logoutGIF from "@/assets/images/logout.gif";
const LogoutModal = ({
  isLogout,
  closeLogout,
}: {
  isLogout: boolean;
  closeLogout: any;
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    cookie.remove("auth_token", {
      path: "/",
    });
    cookie.remove("auth_USER", {
      path: "/",
    });
    cookie.remove("Otate", {
      path: "/",
    });
    dispatch({ type: LOGOUT_SUCCESS });
    navigate("/");
    notifications.show({
      title: "",
      message: "Logged out successfully!",
    });
  };
  return (
    <Modal
      opened={isLogout}
      onClose={closeLogout}
      closeOnClickOutside
      className="w-full"
    >
      <div className="w-full flex flex-col items-center gap-3 rounded-lg">
        <img src={logoutGIF} className="w-auto h-auto rotate-180" />
        <h1 className="font-extrabold mt-3 text-lg">
          Are you sure you want to logout ?
        </h1>
        <div className="w-full flex text-center justify-center gap-10 mt-6">
          <button
            onClick={closeLogout}
            className="py-2 px-5 bg-[#699BFE] rounded font-bold"
          >
            Cancel
          </button>
          <button
            onClick={logout}
            className="py-2 px-5 rounded bg-red-500 font-bold text-white"
          >
            Logout
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default LogoutModal;
