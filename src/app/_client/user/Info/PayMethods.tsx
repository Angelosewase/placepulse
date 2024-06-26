/* eslint-disable @typescript-eslint/no-explicit-any */
import PaymentMethodCard from "../../../../components/Cards/PaymentMethods";
import { IoIosAddCircleOutline } from "react-icons/io";
import AddCardModal from "../../../../components/Modals/addCardModal";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { AxiosAPI } from "../../../../utils/AxiosInstance";
import { useSelector } from "react-redux";
import { notifications } from "@mantine/notifications";
import { ClipLoader } from "react-spinners";

const PaymentMethods = () => {
  const [isAddCardOpen, { open: openAddCard, close: closeAddCard }] =
    useDisclosure();
  const [methods, setMethods] = useState([]);
  const [loading, setLoading] = useState(false);
  const {token} = useSelector((state: any)=> state.auth);
  const fetchCards = async () => {
    setLoading(true);
    AxiosAPI.get(`/paymentmethods/getMine`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setMethods(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };
  const deleteCard = async (id: string) => {
    AxiosAPI.delete(`/paymentmethods/delete/${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then(() => {
        notifications.show({
          message: "Deleted Successfully",
        });
        fetchCards();
      })
      .catch((err) => {
        notifications.show({
          message: err.response.message ?? err.message,
        });
      });
  };
  useEffect(()=>{
    fetchCards();
  },[])
  return (
    <div className="w-full">
      <h1 className="text-3xl font-extrabold">Payment Methods</h1>
      {loading ? (
        <div className="mt-6 pb-4 w-full flex items-center justify-center">
            <ClipLoader size={23} color="black"/>
        </div> 
      ) : (
        <div className="w-full grid grid-cols-3 gap-y-8 mt-6 pb-4">
        {methods.map((method: any, index: number) => {
          return (
            <PaymentMethodCard
              key={index}
              name={method.type}
              tag="MOMO Pay"
              phone={`+250${method.number}`}
              className="flex-shrink-0"
              selected={false}
              setSelected={()=> {}}
              card={method}
              onDeleteCard={deleteCard}
            />
          );
        })}
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
      )}
      <AddCardModal opened={isAddCardOpen} close={closeAddCard} refetch={fetchCards}/>
    </div>
  );
};
export default PaymentMethods;
