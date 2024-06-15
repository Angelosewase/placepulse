/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { HiOutlinePlusSm } from 'react-icons/hi';

const DropWithReturn = ({ minHeight, buttonPadding, textSize, setSelectedImage }: { minHeight: string | number; buttonPadding?: number; textSize?: string; setSelectedImage: any }) => {
  const handleDrop = (files: File[]) => {
    setSelectedImage(files[0]);
  };


  return (
    <Dropzone
      onDrop={handleDrop}
      onReject={(files) => console.log('rejected files', files)}
      maxSize={5 * 1024 ** 2}
      accept={IMAGE_MIME_TYPE}
    >
      <div className={`w-full h-[${minHeight}] cursor-pointer relative`}>
        <div className='border w-full h-full border-dashed rounded-lg border-[#0075FF] flex flex-col gap-2 items-center justify-center'>
            {/* <CiCirclePlus color='#0075FF' size={30}/> */}
            <button className={`border border-dashed border-[#0075FF] p-[${buttonPadding}] rounded-full`}>
            <HiOutlinePlusSm color='#0075FF' size={20} />
            </button>
            <h1 className={`font-extrabold text-[${textSize}]`}>Pick Image</h1>
        </div>
      </div>
    </Dropzone>
  );
}

export default DropWithReturn;
