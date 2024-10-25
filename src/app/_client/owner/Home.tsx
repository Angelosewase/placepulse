/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import DashboardCard from "../../../components/Cards/DashboardCard";
import { Timeline } from "@mantine/core";
import { FaCheckCircle } from "react-icons/fa";
import CompressedView from "../../../components/Cards/CompressedView";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AxiosAPI } from "../../../utils/AxiosInstance";
import { notifications } from "@mantine/notifications";
import { ClipLoader } from "react-spinners";
import { FaHotel, FaBook, FaEye, FaMoneyBillWave } from "react-icons/fa";

export const notificationsData = [
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
const OwnerHome = () => {
  const [accommodations, setAccommodations] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const { token } = useSelector((state: any) => state.auth);
  const getAllBookings = async () => {
    setLoading(true);
    AxiosAPI.get("/booking/owner/getAll", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setBookings(res.data.data);
      })
      .catch((err) => {
        notifications.show({
          message: err.response ?? err.message,
        });
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getAllBookings();
  }, []);
  useEffect(() => {
    AxiosAPI.get("/accommodation/getMine", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setAccommodations(res.data.data);
      })
      .catch((err) => {
        console.log("get Accommodations error -> ", err.messsage);
      });
  }, []);
  const navigate = useNavigate();
  console.log("auth data --> ", accommodations);
  const dashboardStats = [
    {
      title: "Accommodations",
      amount: accommodations.length,
      color: "#EBF6F2",
      icon: <FaHotel className="text-xl text-green-600" size={32} />,
    },
    {
      title: "Bookings",
      amount: bookings.length,
      color: "#EBF6F2",
      icon: <FaBook className="text-xl text-blue-600" size={32} />,
    },
    {
      title: "Visits",
      amount: "29",
      color: "#EBF6F2",
      icon: <FaEye className="text-xl text-purple-600" size={32} />,
    },
    {
      title: "Earnings",
      amount: "2,309,890 RWF",
      color: "#EBF6F2",
      icon: <FaMoneyBillWave className="text-xl text-yellow-600" size={32} />,
    },
  ];
  return (
    <div className="w-full h-  flex-1 ">
      <div className="w-full grid grid-cols-4 gap-4 mt-2 p-1">
        {dashboardStats.map((stat: any, index: number) => {
          return (
            <DashboardCard data={stat} key={index} color={stat.color}>
              {" "}
              {stat.icon}
            </DashboardCard>
          );
        })}
      </div>

      <div className="w-full flex justify-between mt-8 gap-5 items-start ">
        <div className="w-[63%]  p-4 rounded-lg bg-white min-h-[44vh] shadow">
          <div className="w-full flex items-center justify-between">
            <h1 className="text-xl font-bold pl-4">Payed Bookings</h1>
            <button
              onClick={() => navigate("/_owner/bookings")}
              className="text-sm pl-4 text-[#0075FF]"
            >
              All Bookings
            </button>
          </div>
          <div className="w-full flex flex-col gap-3 mt-3 ">
            {loading ? (
              <div className="w-full flex justify-center">
                <ClipLoader size={20} color="black" />
              </div>
            ) : bookings.filter(
                (booking: any) => booking.status === "COMPLETED"
              ).length > 0 ? (
              bookings
                .filter((booking: any) => booking.status === "COMPLETED")
                .slice(0, 3)
                .map((booking: any, index: any) => {
                  return <CompressedView data={booking} key={index} />;
                })
            ) : (
              <div>
                <div className="w-full flex justify-center items-center mt-[10vh]">
                  <h1 className="font-bold">No Payed Bookings Found!</h1>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex-1 pb-4 flex flex-col gap-3 bg-white p-4 rounded-lg mr-1 shadow">
          <h1 className="text-xl font-bold pl-4 mb-3">Notifications</h1>
          <Timeline color={"teal"}>
            {notificationsData.map((notif: any, index: number) => {
              return (
                <Timeline.Item
                  key={index}
                  bullet={<FaCheckCircle color="blue" />}
                  title={notif.time}
                >
                  <p className="text-sm">{notif.description}</p>
                  <div className="w-full flex items-center justify-between gap-3 mt-1 ">
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
