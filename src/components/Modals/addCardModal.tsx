/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal, Select } from "@mantine/core";
// import { notifications } from "@mantine/notifications";
import { useState } from "react";
import AnimatedInput from "../Inputs/AnimatedInput";
import { ClipLoader } from "react-spinners";
// import { notifications } from "@mantine/notifications";

const AddCardModal = ({
  opened,
  close,
}: {
  opened: boolean;
  close: () => void;
}) => {
  const [cardType, setCardType] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handlePhoneChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    console.log(event.target.value);
    setPhone(event.target.value);
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    if (!phone || !cardType) {
      setError("Card Type and Phone are required!")
      setLoading(false);
      return;
    }else{
      setError("");
    }
    // loginService({ email: email, password: password })
    //   .then((res: any) => {
    //     notifications.show({
    //       title: "Success!",
    //       message: res.data.message,
    //       color: "green",
    //     });
    //   })
    //   .catch((err: any) => {
    //     notifications.show({
    //       title: "",
    //       message: err.response?.data?.message ?? err.message,
    //       color: "red",
    //     });
    //   })
    //   .finally(() => setLoading(false));
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  return (
    <div>
      <Modal opened={opened} onClose={close}>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-start gap-4"
        >
          <h1 className="text-2xl font-extrabold mb-[3vh]">Add a new card</h1>

            {error && (
              <div className="w-full rounded-br-lg rounded-tl-lg py-3 pl-3 bg-red-100 border-red-500">
                <p className="text-red-500">{error}</p>
              </div>
            )}
          <div className="w-full flex flex-col items-start gap-6">
            <Select
              className="w-full"
              placeholder="Select Card Type"
              value={cardType}
              onChange={(e: any)=> setCardType(e)}
              data={[
                {
                  label: "MTN",
                  value: "MTN"
                },
                {
                  label: "AIRTEL",
                  value: "AIRTEL"
                },
              ]}
              allowDeselect={false}
              required
            />
            {cardType && (
              <AnimatedInput
              label="Phone Number"
              type="text"
              handleChange={handlePhoneChange}
              value={phone}
              category={"phone"}
              maxLength={9}
            />
            )}
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
              "Save"
            )}
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AddCardModal;
