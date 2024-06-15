/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { HiOutlinePlusSm } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const ImagesDropCard = ({
  minHeight,
  buttonPadding,
  textSize,
  selectedImage,
  setSelectedImage,
}: {
  minHeight: string | number;
  buttonPadding?: number;
  textSize?: string;
  selectedImage: File | null;
  setSelectedImage: any;
}) => {
  const handleDrop = (files: File[]) => {
    // Assuming only one file is being selected
    setSelectedImage(files[0]);
  };

  const handleDeselect = (e: any) => {
    e.stopPropagation();
    setSelectedImage(null);
  };

  return (
    <Dropzone
      onDrop={handleDrop}
      onReject={(files) => console.log("rejected files", files)}
      maxSize={5 * 1024 ** 2}
      accept={IMAGE_MIME_TYPE}
    >
      <div className={`w-full h-[${minHeight}] cursor-pointer relative`}>
        {selectedImage ? (
          <div className="w-full h-full relative">
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Selected"
              className="w-full h-full object-cover rounded-lg cursor-pointer"
            />
            {/* close image */}
            <button
              className="absolute top-3 right-3 bg-neutral-200 rounded-full p-2"
              onClick={handleDeselect}
            >
              <IoClose />
            </button>
          </div>
        ) : (
          <>
            <div className="border w-full h-full border-dashed rounded-lg border-[#0075FF] flex flex-col gap-2 items-center justify-center">
              {/* <CiCirclePlus color='#0075FF' size={30}/> */}
              <button
                className={`border border-dashed border-[#0075FF] p-[${buttonPadding}] rounded-full`}
              >
                <HiOutlinePlusSm color="#0075FF" size={20} />
              </button>
              <h1 className={`font-extrabold text-[${textSize}]`}>
                Pick Image
              </h1>
            </div>
          </>
        )}
      </div>
    </Dropzone>
  );
};

export default ImagesDropCard;
