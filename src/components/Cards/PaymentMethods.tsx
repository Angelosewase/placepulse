/* eslint-disable @typescript-eslint/no-explicit-any */
import { MdDeleteForever } from "react-icons/md";
import { separatePhoneNumber } from "../../utils/funcs/formatter";
import { FaCheckCircle } from "react-icons/fa";

// const PaymentMethodCard = ({selected, setSelected, name, phone, className}:{selected:boolean, setSelected: ()=> void ;name: string; phone: string; className?:string})=>{
const PaymentMethodCard = ({
  name,
  phone,
  className,
  disableSelect,
  setSelected,
  selected,
  card,
  onDeleteCard
}: {
  name: string;
  phone: string;
  className?: string;
  tag?: string;
  disableSelect?: boolean;
  selected: boolean;
  setSelected: any,
  card: any;
  onDeleteCard: (id: string) => void;
}) => {
  const deleteCard = (e: any) =>{
    e.preventDefault();
    e.stopPropagation();
    onDeleteCard(card.id)
  }
  return (
    <div
      className={`${className} w-[328px] h-[160px] flex flex-col justify-between rounded-xl p-1 cursor-pointer ${selected ? " bg-[#1976D2] pt-2" : name?.trim() == "MTN" ? "bg-[#FFC107]" : "bg-[#d04c4c]"}`}
      onClick={() => !disableSelect && setSelected(card)}
    >
      <div className="w-full flex justify-between items-center px-2">
        <h1
          className="text-white text-lg font-extrabold"
          style={{ fontFamily: "Montserrat" }}
        >
          {separatePhoneNumber(phone)}
        </h1>
          {selected ? (
            <FaCheckCircle color="white" size={20} />
          ) : (
            <button className="hover:bg-[#2f2f2f7a] p-2 rounded-full" onClick={deleteCard}>
              <MdDeleteForever color="white" size={20} />
            </button>
          )}
      </div>
      <div className="w-full px-2 pb-2">
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
          {name.trim() == "MTN" ? "MOMO Pay" : "AIRTEL Pay"}
        </h1>
      </div>
    </div>
  );
};

export default PaymentMethodCard;
