/* eslint-disable @typescript-eslint/no-explicit-any
 */
import { VscTypeHierarchy } from "react-icons/vsc";
import { TiLocation } from "react-icons/ti";
import { Menu, Modal } from "@mantine/core";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { notifications } from "@mantine/notifications";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { AuthorizedAxiosAPI } from "../../utils/AxiosInstance";
import { useNavigate } from "react-router-dom";

const ViewAccomCard = ({
  data,
  refetch,
  type,
}: {
  data: any;
  refetch: () => void;
  type: string;
}) => {
  const navigate = useNavigate();
  const [isDelete, setIsDelete] = useState<{
    open: boolean;
    data: any;
    loading: boolean;
  }>({
    open: false,
    data: {},
    loading: false,
  });
  const [isUpdate, setIsUpdate] = useState<{
    open: boolean;
    data: any;
    loading: boolean;
  }>({
    open: false,
    data: {},
    loading: false,
  });

  const deleteAccommodation = () => {
    setIsDelete({ open: true, data: data, loading: true });
    AuthorizedAxiosAPI.delete(`/accommodation/delete/${data.id}`)
      .then((res) => {
        notifications.show({
          message: res.data.message,
        });
        refetch();
        setIsDelete({
          open: false,
          data: {},
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
        notifications.show({
          message: err.message,
        });
        setIsDelete({
          open: true,
          data: data,
          loading: false,
        });
      });
  };
  return (
    <div className="w-full p-4 shadow-md bg-white flex items-start gap-4 cursor-pointer rounded-lg relative hover:shadow-lg transition-shadow">
    {/* Image */}
    <img
      src={data.images[0]}
      alt=""
      className="w-[15vh] h-24 rounded-lg object-cover"
    />
  
    {/* Text Content */}
    <div className="flex flex-col justify-between">
      {/* Title */}
      <h1 className="text-lg font-bold text-gray-800">
        {data.name.length < 17 ? data.name : `${data.name.slice(0, 17)}...`}
      </h1>
  
      {/* Type */}
      <p className="text-sm flex items-center gap-2 text-gray-500">
        <VscTypeHierarchy size={16} />
        {data.type}
      </p>
  
      {/* Location */}
      <h6 className="text-xs font-medium flex items-center gap-2 text-gray-400">
        <TiLocation size={16} />
        {`${data.location.slice(0, 10)}...`}
      </h6>
    </div>
  
    {/* Options Menu */}
    <div className="absolute right-4 top-4">
      <Menu shadow="md" width={180}>
        <Menu.Target>
          <button
            onClick={(e: any) => e.stopPropagation()}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
          >
            <HiOutlineDotsVertical size={20} />
          </button>
        </Menu.Target>
  
        <Menu.Dropdown onClick={(e: any) => e.stopPropagation()}>
          <Menu.Label>Actions</Menu.Label>
          <Menu.Item onClick={() => navigate(`/${type}/accommodations/view/${data.id}`)}>
            View
          </Menu.Item>
          <Menu.Item onClick={() => setIsUpdate({ open: true, data: data, loading: false })}>
            Update
          </Menu.Item>
          <Menu.Item onClick={() => setIsDelete({ open: true, data: data, loading: false })}>
            Delete
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  
    {/* Delete Modal */}
    <Modal
      opened={isDelete.open}
      onClose={() => setIsDelete({ open: false, data: {}, loading: false })}
      title="Delete Accommodation"
    >
      <div className="space-y-4">
        <h1 className="text-gray-700 font-semibold">
          Are you sure you want to delete{" "}
          <span className="text-blue-600 font-bold">{data.name}</span>?
        </h1>
        <div className="flex justify-end gap-3">
          <button
            onClick={() => setIsDelete({ open: false, data: {}, loading: false })}
            className="px-4 py-2 bg-gray-300 rounded-md font-medium hover:bg-gray-400 transition"
          >
            Cancel
          </button>
          <button
            onClick={deleteAccommodation}
            className="px-4 py-2 bg-red-500 text-white rounded-md font-medium hover:bg-red-600 transition"
          >
            {isDelete.loading ? <ClipLoader size={20} color="white" /> : "Yes, Delete"}
          </button>
        </div>
      </div>
    </Modal>
  
    {/* Update Modal */}
    <Modal
      opened={isUpdate.open}
      onClose={() => setIsUpdate({ open: false, data: {}, loading: false })}
      title={`Update ${isUpdate.data.name}`}
    >
      <div className="space-y-4">
        <div className="flex justify-end gap-3">
          <button
            onClick={() => setIsUpdate({ open: false, data: {}, loading: false })}
            className="px-4 py-2 bg-gray-300 rounded-md font-medium hover:bg-gray-400 transition"
          >
            Cancel
          </button>
          <button
            onClick={deleteAccommodation}
            className="px-4 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition"
          >
            {isUpdate.loading ? <ClipLoader size={20} color="white" /> : "Save"}
          </button>
        </div>
      </div>
    </Modal>
  </div>
  
  );
};
export default ViewAccomCard;
