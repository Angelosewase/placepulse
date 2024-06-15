/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal } from "@mantine/core";
import React from "react";
const LogoutModal = ({
  isOpen,
  closeModal,
  children,
}: {
  isOpen: boolean;
  closeLogout: any;
  children: React.ReactElement;
}) => {
  return (
    <Modal
      opened={isOpen}
      onClose={closeModal}
      closeOnClickOutside
      className="w-full"
    >
      {children}
    </Modal>
  );
};

export default LogoutModal;
