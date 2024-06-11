/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { loginService } from "../../services/auth.service";
import { useState } from "react";
import AnimatedInput from "../Inputs/AnimatedInput";
import { ClipLoader } from "react-spinners";

const AddCardModal = ({
  opened,
  close,
}: {
  opened: boolean;
  close: () => void;
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleEmailChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    setPassword(event.target.value);
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    if (!email || !password) {
      notifications.show({
        title: "Error",
        message: "Email and password are required",
        color: "red",
      });
      setLoading(false);
      return;
    }
    loginService({ email: email, password: password })
      .then((res: any) => {
        notifications.show({
          title: "Success!",
          message: res.data.message,
          color: "green",
        });
      })
      .catch((err: any) => {
        notifications.show({
          title: "",
          message: err.response?.data?.message ?? err.message,
          color: "red",
        });
      })
      .finally(() => setLoading(false));
  };
  return (
    <div>
      <Modal opened={opened} onClose={close}>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-start gap-4"
        >
          <h1 className="text-2xl font-extrabold mb-[5vh]">Add a new card</h1>

          <div className="w-full flex flex-col items-start gap-6">
            <AnimatedInput
              label="Phone Number"
              type="text"
              handleChange={handleEmailChange}
              value={email}
            />
            <AnimatedInput
              label="Password"
              type="password"
              showEye={true}
              handleChange={handlePasswordChange}
              value={password}
              className=""
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 py-3 text-center font-bold rounded-md text-white bg-[#699BFE]"
          >
            {loading ? (
              <div className="w-full h-full flex items-center justify-center">
                <ClipLoader size={23} color="black" />
              </div>
            ) : (
              "Add"
            )}
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AddCardModal;
