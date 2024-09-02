/* eslint-disable @typescript-eslint/no-explicit-any */
import ImagesDropCard from "@/components/DropCards/ImagesDropCard";
import { AuthorizedAxiosAPI } from "@/utils/AxiosInstance";
import { Modal } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useState } from "react";
interface RoomType {
  image: File | null;
  name: string;
  price: number;
  stock: string;
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
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<{
    image: File | null;
    name: string;
    price: number;
    stock: string;
  }>({
    image: null,
    name: "",
    price: 0,
    stock: "",
  });
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleAddImage = (image: File | null) => {
    setFormData({ ...formData, image: image });
  };
  const handleAddType = () => {
    setLoading(true);
    const AccommodationData = new FormData();
    AccommodationData.append("name", formData.name);
    AccommodationData.append("price", String(formData.price));
    AccommodationData.append("stock", String(formData.stock));
    if (formData.image) {
      AccommodationData.append("images", formData.image);
    }
    AuthorizedAxiosAPI.post(
      "/accommodation/roomtype/create",
      AccommodationData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    )
      .then((res) => {
        setRoomTypes((prevRoomTypes: RoomType[]) => [
          ...prevRoomTypes,
          res.data.data,
        ]);
        closeAddType();
      })
      .catch((err: any) => {
        console.error(err);
        notifications.show({
          message: "Error",
          color: "red",
        });
      })
      .finally(() => setLoading(false));
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
        <div className="mt-3 flex flex-col gap-2 ">
          <label htmlFor="stock" className="text-sm font-medium">
            Stock
          </label>
          <input
            id="stock"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            placeholder="Enter Room Price"
            className="w-full text-sm py-3 pl-4 pr-3 outline-none border border-neutral-400 rounded-md"
          />
        </div>

        <button
          disabled={loading}
          className={`py-3 w-full flex items-center justify-center ${loading ? "bg-blue-500":"bg-blue-600"} text-white`}
          onClick={handleAddType}
        >
          {loading ? "Adding Room ...": "Add Room"}
        </button>
      </div>
    </Modal>
  );
};

export default AddRoomTypeModal;
