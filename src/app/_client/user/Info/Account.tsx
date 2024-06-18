/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fieldset } from "@mantine/core";
import { HiPencilSquare } from "react-icons/hi2";
import { separatePhoneNumber } from "../../../../utils/funcs/formatter";
import { useSelector } from "react-redux";

const AccountInfo = () => {
  const {user:profile} = useSelector((state: any)=> state.auth);
  const getNames = (data: any) => {
    if (!data) {
      return "Not Set";
    }
    return data;
  };
  return (
    <div className="w-full">
      <h1 className="text-3xl font-extrabold">Account</h1>
        <div className="flex flex-col gap-4 mt-6 shadow-sm shadow-[#c8c8c863] p-5 rounded-lg">
          <Fieldset
            legend="Name"
            className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-3"
          >
            <h1 className="text-xl font-extrabold">
              {getNames(profile.lastName)}
            </h1>
            <button className="flex gap-3 items-center px-5 py-3 border border-[#8DD3BB] rounded-sm">
              <HiPencilSquare color="black" />
              <p className="text-sm font-bold">Change</p>
            </button>
          </Fieldset>
          <Fieldset
            legend="Email"
            className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-3"
          >
            <h1 className="text-xl font-extrabold">{profile.email}</h1>
            <div className="flex flex-col md:flex-row items-start md:items-center mt-4 md:mt-auto gap-4 md:gap-2">
              <button className="flex gap-3 items-center px-5 py-3 border border-[#8DD3BB] rounded-sm">
                <HiPencilSquare color="black" />
                <p className="text-sm font-bold">Add another email</p>
              </button>
              <button className="flex gap-3 items-center px-5 py-3 border border-[#8DD3BB] rounded-sm">
                <HiPencilSquare color="black" />
                <p className="text-sm font-bold">Change</p>
              </button>
            </div>
          </Fieldset>
          <Fieldset
            legend="Password"
            className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-3"
          >
            <h1 className="text-xl font-extrabold">{"****************"}</h1>
            <button className="flex gap-3 items-center px-5 py-3 border border-[#8DD3BB] rounded-sm">
              <HiPencilSquare color="black" />
              <p className="text-sm font-bold">Change</p>
            </button>
          </Fieldset>
          <Fieldset
            legend="Phone Number"
            className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-3"
          >
            <h1 className="text-xl font-extrabold">
              {separatePhoneNumber(`+${profile.phone}`)}
            </h1>
            <button className="flex gap-3 items-center px-5 py-3 border border-[#8DD3BB] rounded-sm">
              <HiPencilSquare color="black" />
              <p className="text-sm font-bold">Change</p>
            </button>
          </Fieldset>
        </div>
    </div>
  );
};
export default AccountInfo;
