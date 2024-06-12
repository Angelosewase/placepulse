/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal } from "@mantine/core"
import { notifications } from "@mantine/notifications";
import cookies from "react-cookies";
import { useNavigate } from "react-router-dom";
const LogoutModal = ({isLogout, closeLogout}: {isLogout: boolean; closeLogout: any})=>{
    const navigate = useNavigate();
    const logout = ()=>{
        cookies.remove("auth_token");
        navigate("/");
        notifications.show({
            title:"",
            message: "Logged out successfully!"
        })
    }
    return(
            <Modal opened={isLogout} onClose={closeLogout} closeOnClickOutside className="w-full">
                <div className="w-full">
                    <h1 className="font-extrabold">Are you sure you want to logout ?</h1>
                    <div className="w-full flex text-center justify-between mt-6">
                        <button onClick={closeLogout} className="py-2 px-5 bg-[#699BFE] rounded-md font-bold">Cancel</button>
                        <button onClick={logout} className="py-2 px-5 rounded-md bg-red-500 font-bold text-white">Logout</button>
                    </div>
                </div>
            </Modal>
    )
}

export default LogoutModal