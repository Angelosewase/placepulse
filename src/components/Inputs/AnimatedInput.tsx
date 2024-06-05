/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

const AnimatedInput = ({type, label, handleChange, value, className, showEye}: {type: string, label: string, handleChange: React.ChangeEventHandler<HTMLElement>, value: string, className?: string, showEye?:boolean}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (value === '') {
      setIsFocused(false);
    }
  };

//   const handleChange = (e: any) => {
//     setInputValue(e.target.value);
//   };

  return (
    <div className="w-full flex flex-col items-start gap-2 relative">
      <label
        htmlFor={label}
        className={`absolute left-3 top-3 transition-transform duration-200 ${
          isFocused || value
            ? 'transform -translate-y-6 scale-75 z-50 bg-white text-[#1C1B1F] font-medium'
            : 'transform translate-y-0 scale-100'
        }`}
      >
        {label}
      </label>
      <input
        type={showPassword ? "text" : type}
        id={label}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        className={`${className} p-3 py-4 w-full border border-[#79747E] rounded-md text-sm text-[#1C1B1F] focus:outline-none focus:border-[#79747E]`}
      />
      {(showEye) && (
        <div className='absolute top-5 right-3 cursor-pointer'>
            {showPassword ? (
                <BsEyeSlash color='black' onClick={()=> setShowPassword(!showPassword)}/>
            ) : 
            <BsEye color='black' onClick={()=> setShowPassword(!showPassword)}/>}
        </div>
      )}
    </div>
  );
};

export default AnimatedInput;
