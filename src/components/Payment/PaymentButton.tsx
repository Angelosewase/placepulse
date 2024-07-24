import { notifications } from "@mantine/notifications";
import {FLUTTERWAVE_PAYMENT_TEST_KEY} from "../../../env"
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
type PaymentData = {
  amount: number;
  currency: string;
  title: string;
  image: string;
  customer: {
    email: string;
    phoneNumber: string | undefined;
    name: string | undefined;
  }
}
export default function FlutterwavePayButton({
  className,
  label,
  data,
  // initFunction
}:{
  className?: string;
  label: string;
  data: PaymentData;
  initFunction: ()=> void;
}) {
  const config = {
    public_key: FLUTTERWAVE_PAYMENT_TEST_KEY,
    tx_ref: String(Date.now()),
    amount: data.amount,
    currency: "RWF",
    payment_options: "card,mobilemoney",
    customer: {
      email: data.customer.email ?? "",
      phone_number: data.customer.phoneNumber ?? "",
      name: data.customer.name ?? "No name set",
    },
    customizations: {
      title: data.title,
      description: `Payment For ${data.title}`,
      logo: data.image,
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const onPaymentSuccess = ()=>{
    notifications.show({
      message: `Successfully payed for ${data.title}`,
      color: "green",
      duration: 10000,
    })
    // call your backend API to save the payment transaction
  }
  return (
    <button
      className={className}
      onClick={() => {
        // initFunction()
        console.log(config)
        handleFlutterPayment({
          callback: (response) => {
            console.log(response);
            if(response.status === "successful"){
              onPaymentSuccess()
            }else{
              notifications.show({
                message: "Payment Failed",
                color: "red",
                duration: 10000,
              })
            }
            closePaymentModal();
          },
          onClose: () => {},
        });
      }}
    >
      {label}
    </button>
  );
}
