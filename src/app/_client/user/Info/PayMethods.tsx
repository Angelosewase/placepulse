import PaymentMethodCard from "../../../../components/Cards/PaymentMethods";
import { IoIosAddCircleOutline } from "react-icons/io";
import AddCardModal from "../../../../components/Modals/addCardModal";
import { useDisclosure } from "@mantine/hooks";

const PaymentMethods = () => {
  const [isAddCardOpen, { open: openAddCard, close: closeAddCard }] =
    useDisclosure();
  return (
    <div className="w-full">
      <h1 className="text-3xl font-extrabold">Payment Methods</h1>
      <div className="w-full flex overflow-x-auto space-x-4 pay_meth_container mt-6 pb-4">
        <PaymentMethodCard
          name="MTN"
          tag="MOMO Pay"
          phone="+250788460119"
          className="h-[170px] flex-shrink-0"
          disableSelect={true}
        />
        <PaymentMethodCard
          name="AIRTEL"
          tag="AIRTEL Money"
          phone="+250726632125"
          className="h-[170px] flex-shrink-0 bg-[#FF0707]"
          disableSelect={true}
        />
        <div
          onClick={openAddCard}
          className="w-[328px] h-[170px] flex-shrink-0 flex items-center justify-center border-2 border-dashed divide-dashed border-[#396FF9] rounded-xl cursor-pointer"
        >
          <div className="flex flex-col gap-2 items-center justify-center">
            <IoIosAddCircleOutline color="#396FF9" size={39} />
            <h6 className="text-sm">Add a new card</h6>
          </div>
        </div>
      </div>
      <AddCardModal opened={isAddCardOpen} close={closeAddCard} />
    </div>
  );
};
export default PaymentMethods;
