/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { GoCopy } from "react-icons/go";
import { HiShare } from "react-icons/hi2";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BsCheckCircle } from "react-icons/bs";

const ShareButton = ({ accommodation }: { accommodation: any }) => {
  const [isOpen, { open, close }] = useDisclosure(false);
  const [link, setLink] = useState({
    text: "",
    copied: false,
  });
  const createLink = () => {
    setLink({
      text: `http://localhost:5000/places/${accommodation.id}`,
      copied: false,
    });
  };
  useEffect(() => {
    createLink();
  }, []);
  return (
    <div>
      <button
        onClick={open}
        className="w-[4rem] h-[3rem] flex items-center justify-center rounded-sm border border-[#8DD3BB] font-bold"
      >
        <HiShare color="black" size={20} />
      </button>
      <Modal opened={isOpen} onClose={close} title="Share Accommodation">
        <div className="w-full h-full ">
          <h1>Accommodation share Link</h1>
          <p
            className=" text-blue-600 font-semibold"
            style={{ userSelect: "auto" }}
          >
            {link.text}
          </p>
          <CopyToClipboard text={link.text}>
            <button
              onClick={() => {
                setLink({ text: link.text, copied: true });
                close();
              }}
              className={`py-3 w-full rounded-md border mt-4 flex items-center justify-center gap-3 ${link.copied ? "border-green-400 bg-green-300 font-bold text-white" : ""}`}
            >
              {link.copied ? (
                <>
                  <BsCheckCircle size={20} />
                  Link Copied
                </>
              ) : (
                <>
                  <GoCopy />
                  Copy Link
                </>
              )}
            </button>
          </CopyToClipboard>
        </div>
      </Modal>
    </div>
  );
};
export default ShareButton;
