/* eslint-disable @typescript-eslint/no-explicit-any */
import { Accordion } from "@mantine/core";

const FAQPage = () => {
  const faqs = [
    {
      title: "Is my place right for PlacePulse",
      content:
        "Airbnb guests are interested in all kinds of places. We have listings for tiny homes, cabins, treehouses, and more. Even a spare room can be a great place to stay.",
    },
    {
      title: "Do I have to host all the time",
      content:
        "Not at all—you control your calendar. You can host once a year, a few nights a month, or more often.",
    },
    {
      title: "How much should I interact with the customers",
      content:
        "It’s up to you. Some Hosts prefer to message guests only at key moments—like sending a short note when they check in—while others also enjoy meeting their guests in person. You’ll find a style that works for you and your guests.",
    },
    {
      title: "An tip on being a great placepulse client",
      content:
        "Getting the basics down goes a long way. Keep your place clean, respond to guests promptly, and provide necessary amenities, like fresh towels. Some Hosts like adding a personal touch, such as putting out fresh flowers or sharing a list of local places to explore—but it’s not required.",
    },
    {
      title: "What are placepulse fees",
      content:
        "Airbnb typically collects a flat service fee of 3% of the reservation subtotal when you get paid. We also collect a fee from guests when they book. In many areas, Airbnb collects and pays sales and tourism taxes automatically on your behalf as well.",
    },
  ];
  const FaqItems = faqs.map((faq: any, index: number) => (
    <Accordion.Item
      key={index}
      value={faq.title}
      className="py-1 text- text-black"
    >
      <Accordion.Control>{faq.title}</Accordion.Control>
      <Accordion.Panel>{faq.content}</Accordion.Panel>
    </Accordion.Item>
  ));
  return (
    <div className="w-full mt-10 flex flex-col md:flex-row justify-between  py-10 ">
      <h1 className="text-4xl font-extrabold md:w-[40%]  w-full mb-4 md:mb-auto  ">
        Your Questions, Answered
      </h1>
      <Accordion className="w-full md:w-[50%] flex flex-col ">
        {FaqItems}
      </Accordion>
    </div>
  );
};
export default FAQPage;
