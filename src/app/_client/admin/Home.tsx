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
const AdminHome = () => {
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
    },
    {
      title: "Bookings",
      amount: bookings.length,
      color: "#EBF6F2",
    },
    {
      title: "Visits",
      amount: "29",
      color: "#EBF6F2",
    },
    {
      title: "Earnings",
      amount: "2309890 RWF",
      color: "#EBF6F2",
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
            <h1 className="text-lg font-bold pl-4">Payed Bookings</h1>
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
                (booking: any) => booking.status === "COMPLETED",
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
        <div className="w-[33%] pb-20 flex flex-col gap-3">
          <h1 className="text-lg font-bold pl-4">Notifications</h1>
          <Timeline color={"teal"}>
            {notificationsData.map((notif: any, index: number) => {
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

export default AdminHome;
