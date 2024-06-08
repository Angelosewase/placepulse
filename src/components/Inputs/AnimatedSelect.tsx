/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const AnimatedSelect = ({
  type,
  label,
  handleChange,
  value,
  className,
  showEye,
}: {
  type: string;
  label: string;
  handleChange: React.ChangeEventHandler<HTMLElement>;
  value: string;
  className?: string;
  showEye?: boolean;
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full flex flex-col items-start gap-2 relative">
      <label
        htmlFor={label}
        className={"absolute left-3 top-3 transition-transform duration-200 transform -translate-y-6 scale-75 z-50 bg-white text-[#1C1B1F] font-medium"}
      >
        {label}
      </label>
      <input
        type={showPassword ? "text" : type}
        id={label}
        value={value}
        onChange={handleChange}
        className={`${className} p-3 py-4 w-full border border-[#79747E] rounded-md text-sm text-[#1C1B1F] focus:outline-none focus:border-[#79747E]`}
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

export default AnimatedSelect;
