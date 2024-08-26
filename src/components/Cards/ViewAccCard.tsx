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
}: {
  data: any;
  refetch: () => void;
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
    <div
      className="w-full pl-4 py-2 shadow-sm shadow-[#ccccccba] flex justify-start gap-4 cursor-pointer relative"
      onClick={() => navigate(`/_owner/accommodations/view/${data.id}`)}
    >
      <img
        src={data.images[0]}
        alt=""
        className="w-[15vh] h-[15vh] rounded-sm"
      />
      <div className="h-full flex flex-col gap-1">
        <h1 className="font-extrabold">
          {data.name.length < 17
            ? data.name
            : `${data.name.slice(0, 17)} . . .`}
        </h1>
        <p className="text-sm w-full flex items-center gap-1">
          <VscTypeHierarchy />
          {data.type}
        </p>
        <h6 className="text-xs font-bold w-full flex items-center gap-1">
          <TiLocation />
          {`${data.location.slice(0, 10)} . . .`}
        </h6>
      </div>
      <div className="absolute right-4 top-3">
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <button>
              <HiOutlineDotsVertical />
            </button>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Label>Actions</Menu.Label>
            <Menu.Item
              onClick={() => navigate(`/_owner/accommodations/view/${data.id}`)}
            >
              View
            </Menu.Item>
            <Menu.Item
              onClick={() =>
                setIsUpdate({ open: true, data: data, loading: false })
              }
            >
              Update
            </Menu.Item>
            <Menu.Item
              onClick={() =>
                setIsDelete({ open: true, data: data, loading: false })
              }
            >
              Delete
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
      <Modal
        opened={isDelete.open}
        onClose={() => setIsDelete({ open: false, data: {}, loading: false })}
        title="Delete Accommodation"
      >
        <div className="w-full">
          <h1 className="font-extrabold">
            Proceed to delete{" "}
            <span className="text-[#0075FF] font-extrabold">{data.name}</span> ?
          </h1>
          <div className="w-full flex text-center justify-between mt-6">
            <button
              onClick={() =>
                setIsDelete({ open: false, data: {}, loading: false })
              }
              className="py-2 px-5 bg-[#699BFE] rounded-md font-bold"
            >
              Cancel
            </button>
            <button
              onClick={deleteAccommodation}
              className="py-2 px-5 rounded-md bg-red-500 font-bold text-white"
            >
              {isDelete.loading ? (
                <ClipLoader size={20} color="white" />
              ) : (
                "Yes Delete"
              )}
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        opened={isUpdate.open}
        onClose={() => setIsUpdate({ open: false, data: {}, loading: false })}
        title={`Update ${isUpdate.data.name}`}
      >
        <div className="w-full">
          <div className="w-full flex text-center justify-between mt-6">
            <button
              onClick={() =>
                setIsUpdate({ open: false, data: {}, loading: false })
              }
              className="py-2 px-5 bg-[#699BFE] rounded-md font-bold"
            >
              Cancel
            </button>
            <button
              onClick={deleteAccommodation}
              className="py-2 px-5 rounded-md bg-red-500 font-bold text-white"
            >
              {isUpdate.loading ? (
                <ClipLoader size={20} color="white" />
              ) : (
                "Save"
              )}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default ViewAccomCard;
