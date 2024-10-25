/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import OwnerComponent from "./OwnerComponent";
import AddOwner from "@/components/Modals/AddOwner";
import { useDisclosure } from "@mantine/hooks";

const AccommodationOwnersPage = () => {
  const [addOwner, { open, close }] = useDisclosure(false);
  const { owners, loading } = useSelector((state: any) => state.owners);
  console.log(owners, loading);
  return (
    <div className="w-full h-ful mt-3">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Accommodations Owners</h1>
        <button
          onClick={open}
          className="py-2 px-7 bg-blue-300 hover:bg-blue-400 rounded-lg font-semibold "
        >
          New
        </button>
      </div>

      <div className="w-full  gap-4 flex gap-y-8 mt-10">
        {owners?.map((owner: any) => {
          return <OwnerComponent data={owner} />;
        })}
      </div>
      <AddOwner isOpen={addOwner} close={close} />
    </div>
  );
};

export default AccommodationOwnersPage;
