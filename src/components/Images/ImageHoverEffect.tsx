import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa6";

/* eslint-disable @typescript-eslint/no-explicit-any */
const ImageWithHoverEffect = ({ image }: any) => {
  const [hovered, setHovered] = useState(false);
  const [opened, {open, close}] = useDisclosure(false);
  return (
    <div
      className="w-full relative m-2 my-4 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={image} className="w-full  rounded-lg cursor-pointer" />
      {hovered && (
        <div className="w-full h-full absolute flex items-center justify-center bg-[#cccccc3a] z-50 top-0 rounded-lg">
            <button onClick={open}>
                <FaRegEye color="#0075FF" size={20} />
            </button>
        </div>
      )}

      <Modal opened={opened} onClose={close} title="View Image">
        <img src={image} className="w-full h-full rounded-lg" />
      </Modal>
    </div>
  );
};

export default ImageWithHoverEffect;
