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
    public_key: "FLWPUBK-**************************-X",
    tx_ref: String(Date.now()),
    amount: data.amount,
    currency: "RWF",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: data.customer.email ?? "",
      phone_number: data.customer.phoneNumber ?? "",
      name: "John Doe",
    },
    customizations: {
      title: data.title,
      description: `Payment For ${data.title}`,
      logo: data.image,
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <button
      className={className}
      onClick={() => {
        // initFunction()
        console.log(config)
        handleFlutterPayment({
          callback: (response) => {
            console.log(response);
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
