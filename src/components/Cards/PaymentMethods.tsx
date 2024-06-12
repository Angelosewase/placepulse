import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { separatePhoneNumber } from "../../utils/funcs/formatter";
import { FaCheckCircle } from "react-icons/fa";

// const PaymentMethodCard = ({selected, setSelected, name, phone, className}:{selected:boolean, setSelected: ()=> void ;name: string; phone: string; className?:string})=>{
const PaymentMethodCard = ({
  name,
  phone,
  className,
  tag,
  disableSelect
}: {
  name: string;
  phone: string;
  className?: string;
  tag: string;
  disableSelect?:boolean
}) => {
  const [selected, setSelected] = useState(false);
  return (
    <div
      className={`${className} w-[328px] h-[160px] flex flex-col justify-between rounded-xl p-3 cursor-pointer ${selected ? " bg-[#1976D2]" : "bg-[#FFC107]"}`}
      onClick={() => !disableSelect && setSelected(true)}
    >
      <div className="w-full flex justify-between items-center">
        <h1
          className="text-white text-lg font-extrabold"
          style={{ fontFamily: "Montserrat" }}
        >
          {separatePhoneNumber(phone)}
        </h1>
        {selected ? (
          <FaCheckCircle color="white" size={20} />
        ) : (
          <MdDeleteForever color="white" size={20} />
        )}
      </div>
      <div className="w-full">
        <h6
          className="text-xs mb-[-1vh] font-medium text-white"
          style={{ fontFamily: "Montserrat" }}
        >
          {name.toUpperCase()}
        </h6>
        <h1
          className="text-lg font-extrabold"
          style={{ fontFamily: "Montserrat" }}
        >
          {tag}
        </h1>
      </div>
    </div>
  );
};

export default PaymentMethodCard;
