/* eslint-disable @typescript-eslint/no-explicit-any */
import { Select } from "@mantine/core";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const LandingSelect = ({
  label,
  handleChange,
  value,
  className,
  showEye,
  data,
  onClick,
}: {
  label: string;
  handleChange: (e: any) => void;
  value: string;
  className?: string;
  showEye?: boolean;
  data: any[];
  onClick?: any;
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full h-full flex flex-col items-start gap-2 relative border rounded ">
      <label
        htmlFor={label}
        className={
          "absolute left-3 top-3 transition-transform duration-200 transform -translate-y-6 scale-75 z-50 bg-white text-[#112211] font-medium  "
        }
      >
        {label}
      </label>

      <Select
        placeholder={`Pick ${label}`}
        data={data}
        value={value}
        onChange={handleChange}
        defaultValue="React"
        clearable
        className={className}
        onClick={onClick}
      />
      {showEye && (
        <div className="absolute top-5 right-3 cursor-pointer">
          {showPassword ? (
            <BsEyeSlash
              color="black"
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <BsEye
              color="black"
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default LandingSelect;
