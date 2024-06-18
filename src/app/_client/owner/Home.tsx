/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import DashboardCard from "../../../components/Cards/DashboardCard";
import { Timeline } from "@mantine/core";
import { FaCheckCircle } from "react-icons/fa";
import { bookings } from "./OwnerBookings";
import CompressedView from "../../../components/Cards/CompressedView";
import { useNavigate } from "react-router-dom";

const OwnerHome = () => {
  const data = useSelector((state: any) => state.auth);
  const navigate = useNavigate();
  console.log("auth data --> ", data);
  const dashboardStats = [
    {
      title: "Accommodations",
      amount: "23",
      color: "#E5ECF6",
    },
    {
      title: "Bookings",
      amount: "3",
      color: "#E3F5FF",
    },
    {
      title: "Visits",
      amount: "29",
      color: "#EBF6F2",
    },
    {
      title: "Earnings",
      amount: "2309890 RWF",
      color: "#E5ECF6",
    },
  ];

  const notifications = [
    {
      time: "12:23 PM",
      date: "18/06/2024",
      description: "John Booked your Accommodation",
    },
    {
      time: "12:23 PM",
      date: "18/06/2024",
      description: "John Booked your Accommodation",
    },
    {
      time: "12:23 PM",
      date: "18/06/2024",
      description: "John Booked your Accommodation",
    },
  ];
  return (
    <div className="w-full mb-20">
      <div className="w-full h-[23vh]  grid grid-cols-4 gap-4">
        {dashboardStats.map((stat: any, index: number) => {
          return <DashboardCard data={stat} key={index} color={stat.color} />;
        })}
      </div>

      <div className="w-full flex justify-between mt-[10vh]">
        <div className="w-[64%]">
          <div className="w-full flex items-center justify-between">
            <h1 className="text-lg font-bold pl-4">Bookings</h1>
            <button onClick={()=> navigate} className="text-sm pl-4 text-[#112211]">
              More
            </button>
          </div>
          <div className="w-full flex flex-col gap-3 mt-3 ">
            {bookings.slice(0, 3).map((booking: any, index: any) => {
              return <CompressedView data={booking} key={index} />;
            })}
          </div>
        </div>
        <div className="w-[33%] pb-20 flex flex-col gap-3">
          <h1 className="text-lg font-bold pl-4">Notifications</h1>
          <Timeline color={"teal"}>
            {notifications.map((notif: any, index: number) => {
              return (
                <Timeline.Item
                  key={index}
                  bullet={<FaCheckCircle color="black" />}
                  title={notif.time}
                >
                  <p className="text-sm">{notif.description}</p>
                  <div className="w-full flex items-center justify-between gap-3 mt-1">
                    <p className="text-sm">{notif.date}</p>
                    <p className="text-sm">{2} hours ago</p>
                  </div>
                </Timeline.Item>
              );
            })}
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default OwnerHome;
