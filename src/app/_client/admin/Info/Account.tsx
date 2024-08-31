/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fieldset } from "@mantine/core";
import { HiPencilSquare } from "react-icons/hi2";
import { separatePhoneNumber } from "../../../../utils/funcs/formatter";
import { useSelector } from "react-redux";
import { useState } from "react";

const AdminAccountInfo = () => {
  const { user } = useSelector((state: any) => state.auth);

  const [formData, setFormData] = useState({
    firstName: user?.firstName,
    lastName: user?.lastName,
    email: user.email,
    phone: separatePhoneNumber(user?.phone ?? ""),
    password: "************",
  });

  const [isEditing, setIsEditing] = useState({
    name: false,
    email: false,
    password: false,
    phone: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const toggleEditMode = (field: string) => {
    setIsEditing((prev) => ({
      ...prev,
      [field]: (!prev as any)[field],
    }));
  };

  const handleSave = (field: string) => {
    // Implement save functionality here, e.g., send data to an API
    toggleEditMode(field);
  };

  return (
    <div className="w-full">
      <h1 className="text-3xl font-extrabold">Account</h1>
      <div className="flex flex-col gap-4 mt-6 shadow-sm shadow-[#c8c8c863] p-5 rounded-lg">
        {/* Name Field */}
        <Fieldset
          legend="Name"
          className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-3"
        >
          {isEditing.name ? (
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="text-xl font-extrabold outline-none bg-transparent "
            />
          ) : (
            <p className="text-xl font-extrabold">
              {formData.firstName ?? "Not Named"}
            </p>
          )}
          <button
            onClick={() =>
              isEditing.name ? handleSave("name") : toggleEditMode("name")
            }
            className="flex gap-3 items-center px-5 py-3 border border-[#8DD3BB] rounded-sm"
          >
            <HiPencilSquare color="black" />
            <p className="text-sm font-bold">
              {isEditing.name ? "Save" : "Change"}
            </p>
          </button>
        </Fieldset>

        {/* Email Field */}
        <Fieldset
          legend="Email"
          className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-3"
        >
          {isEditing.email ? (
            <input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="text-xl font-extrabold outline-none bg-transparent "
            />
          ) : (
            <p className="text-xl font-extrabold">{formData.email}</p>
          )}
          <button
            onClick={() =>
              isEditing.email ? handleSave("email") : toggleEditMode("email")
            }
            className="flex gap-3 items-center px-5 py-3 border border-[#8DD3BB] rounded-sm"
          >
            <HiPencilSquare color="black" />
            <p className="text-sm font-bold">
              {isEditing.email ? "Save" : "Change"}
            </p>
          </button>
        </Fieldset>

        {/* Password Field */}
        <Fieldset
          legend="Password"
          className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-3"
        >
          {isEditing.password ? (
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              className="text-xl font-extrabold outline-none bg-transparent "
            />
          ) : (
            <p className="text-xl font-extrabold">{formData.password}</p>
          )}
          <button
            onClick={() =>
              isEditing.password
                ? handleSave("password")
                : toggleEditMode("password")
            }
            className="flex gap-3 items-center px-5 py-3 border border-[#8DD3BB] rounded-sm"
          >
            <HiPencilSquare color="black" />
            <p className="text-sm font-bold">
              {isEditing.password ? "Save" : "Change"}
            </p>
          </button>
        </Fieldset>

        {/* Phone Number Field */}
        <Fieldset
          legend="Phone Number"
          className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-3"
        >
          {isEditing.phone ? (
            <input
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="text-xl font-extrabold outline-none bg-transparent "
            />
          ) : (
            <p className="text-xl font-extrabold">{formData.phone}</p>
          )}
          <button
            onClick={() =>
              isEditing.phone ? handleSave("phone") : toggleEditMode("phone")
            }
            className="flex gap-3 items-center px-5 py-3 border border-[#8DD3BB] rounded-sm"
          >
            <HiPencilSquare color="black" />
            <p className="text-sm font-bold">
              {isEditing.phone ? "Save" : "Change"}
            </p>
          </button>
        </Fieldset>
      </div>
    </div>
  );
};

export default AdminAccountInfo;
