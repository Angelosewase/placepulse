/* eslint-disable @typescript-eslint/no-explicit-any */
import ImagesDropCard from "@/components/DropCards/ImagesDropCard";
import { Modal } from "@mantine/core";
import { useState } from "react";
interface RoomType {
  image: File | null;
  name: string;
  price: number;
}
const AddRoomTypeModal = ({
  isAddType,
  closeAddType,
  setRoomTypes,
}: {
  isAddType: boolean;
  closeAddType: () => void;
  setRoomTypes: any;
}) => {
  const [formData, setFormData] = useState<{
    image: File | null;
    name: string;
    price: number;
  }>({
    image: null,
    name: "",
    price: 0,
  });
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleAddImage = (image: File | null) => {
    setFormData({ ...formData, image: image });
  };
  const handleAddType = () => {
    setRoomTypes((prevRoomTypes: RoomType[]) => [...prevRoomTypes, formData]);
    closeAddType();
  };
  return (
    <Modal size={"lg"} opened={isAddType} onClose={closeAddType}>
      <div className="w-full flex flex-col gap-2">
        <h1>Add Room Type</h1>
        <ImagesDropCard
          selectedImage={formData.image}
          setSelectedImage={handleAddImage}
          minHeight={"38vh"}
        />
        <div className="mt-3 flex flex-col gap-2 ">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Room Name"
            className="w-full text-sm py-3 pl-4 pr-3 outline-none border border-neutral-400 rounded-md"
          />
        </div>
        <div className="mt-3 flex flex-col gap-2 ">
          <label htmlFor="name" className="text-sm font-medium">
            Price
          </label>
          <input
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter Room Price"
            className="w-full text-sm py-3 pl-4 pr-3 outline-none border border-neutral-400 rounded-md"
          />
        </div>

        <button
          className="py-3 w-full flex items-center justify-center bg-blue-600 text-white"
          onClick={handleAddType}
        >
          Add Room
        </button>
      </div>
    </Modal>
  );
};

export default AddRoomTypeModal;
