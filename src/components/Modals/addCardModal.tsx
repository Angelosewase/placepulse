/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal, Select } from "@mantine/core";
// import { notifications } from "@mantine/notifications";
import { useState } from "react";
import AnimatedInput from "../Inputs/AnimatedInput";
import { ClipLoader } from "react-spinners";
import { AxiosAPI } from "../../utils/AxiosInstance";
import { notifications } from "@mantine/notifications";
import { useSelector } from "react-redux";
// import { notifications } from "@mantine/notifications";

const AddCardModal = ({
  opened,
  close,
  refetch,
}: {
  opened: boolean;
  close: () => void;
  refetch: () => void;
}) => {
  const { token } = useSelector((state: any) => state.auth);
  const [cardType, setCardType] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [country, setCountry] = useState("");
  const handlePhoneChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    setPhone(event.target.value);
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    if (!phone || !cardType) {
      setError("Card Type and Phone are required!");
      setLoading(false);
      return;
    } else {
      setError("");
    }
    AxiosAPI.post(
      "/paymentmethods/create",
      {
        type: cardType,
        number: phone,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
      .then((res) => {
        notifications.show({
          message: res.data.message,
          color: "green",
        });
        setPhone("");
        setCardType("");
        close();
        refetch();
      })
      .catch((err) => {
        notifications.show({
          message: err.response.message ?? err.message,
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
          <h1 className="text-2xl font-extrabold mb-[1vh]">Add a new card</h1>

          {error && (
            <div className="w-full rounded-br-lg rounded-tl-lg py-3 pl-3 bg-red-100 border-red-500">
              <p className="text-red-500">{error}</p>
            </div>
          )}
          <div className="w-full flex flex-col items-start gap-6">
            <Select
              className="w-full h-16"
              placeholder="Select Card Type"
              value={cardType}
              onChange={(e: any) => setCardType(e)}
              data={[
                {
                  label: "MTN",
                  value: "MTN",
                },
                {
                  label: "AIRTEL",
                  value: "AIRTEL",
                },
                {
                  label: "Credit card",
                  value: "CREDIT_CARD",
                },
              ]}
              allowDeselect={false}
              required
            />
            {cardType && (cardType == "MTN" || cardType == "AIRTEL") && (
              <AnimatedInput
                label="Phone Number"
                type="text"
                handleChange={handlePhoneChange}
                value={phone}
                category={"phone"}
                maxLength={9}
              />
            )}
            {cardType && cardType === "CREDIT_CARD" && (
              <div className="w-full flex flex-col gap-6">
                <AnimatedInput
                  label="Card Number"
                  type="text"
                  handleChange={handlePhoneChange}
                  value={phone}
                  maxLength={9}
                />
                <div className="w-full flex justify-between gap-2">
                  <AnimatedInput
                    label="Exp. Date"
                    type="text"
                    handleChange={handlePhoneChange}
                    value={phone}
                    maxLength={9}
                  />
                  <AnimatedInput
                    label="CVC"
                    type="text"
                    handleChange={handlePhoneChange}
                    value={phone}
                    maxLength={9}
                  />
                </div>
                <AnimatedInput
                  label="Name on Card"
                  type="text"
                  handleChange={handlePhoneChange}
                  value={phone}
                  // maxLength={9}
                />
                <Select
                  className="w-full"
                  placeholder="Pick country"
                  value={country}
                  onChange={(e: any) => setCountry(e)}
                  data={[
                    {
                      label: "Rwanda",
                      value: "RW",
                    },
                    {
                      label: "Burundi",
                      value: "BU",
                    },
                    {
                      label: "United States of America",
                      value: "USA",
                    },
                  ]}
                  allowDeselect={false}
                  required
                />
              </div>
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
