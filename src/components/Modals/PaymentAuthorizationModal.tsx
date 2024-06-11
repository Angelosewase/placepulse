import { Modal } from "@mantine/core";
import { useState } from "react";
import { ClipLoader } from "react-spinners";

const PaymentAuthorizationModal = ({
  opened,
  close,
}: {
  opened: boolean;
  close: () => void;
}) => {
  const [loading] = useState(true);
  return (
    <div>
      <Modal opened={opened} onClose={close} closeOnClickOutside={false}>
        <div className="flex flex-col items-center gap-3">
          <h1 className="">
            Please Authorize the payment amount on your Mobile Phone by entering
            your MTN MoMo Pin to confirm payment. Thank you.
          </h1>
          <h1 className="font-extrabold">
            To approve your transaction dial *182*7*1#. Kwemeza kwishyura kanda
            *182*7*1#
          </h1>
          <div className="w-full py-3 mt-3 rounded-sm flex items-center font-extrabold justify-center bg-[#98a7cd]">
            {loading && (
              <div className="flex gap-3 items-center">
                <h1 className="text-white">Still Loading Payment</h1>
                <ClipLoader size={23} color="white" />
              </div>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PaymentAuthorizationModal;
