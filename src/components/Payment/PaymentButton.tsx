import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

export default function FlutterwavePayButton() {
  const config = {
    public_key: 'FLWPUBK-**************************-X',
    tx_ref: String(Date.now()),
    amount: 100,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'user@gmail.com',
       phone_number: '070********',
      name: 'john doe',
    },
    customizations: {
      title: 'my Payment Title',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
      <button
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
               console.log(response);
                closePaymentModal()
            },
            onClose: () => {},
          });
        }}
      >
        Pay With Flutterwave
      </button>
  );
}