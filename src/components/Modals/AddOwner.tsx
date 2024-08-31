/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal } from "@mantine/core";
import Register from "../ui/Register";
const AddOwner = ({
  isOpen,
  close,
}: {
  isOpen: boolean;
  close: () => void;
}) => {
  return (
    <Modal opened={isOpen} onClose={close} title="Register New Owner">
      <Register close={close} />
    </Modal>
  );
};

export default AddOwner;
