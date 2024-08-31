import { Timeline } from "@mantine/core";
import { FaCheckCircle } from "react-icons/fa";
import { useSelector } from "react-redux";

/* eslint-disable @typescript-eslint/no-explicit-any */
const AdminNotificationsPage = () => {
  const { notifications } = useSelector((state: any) => state.notifications);
  return (
    <div className="w-full pb-20 flex flex-col gap-3">
      <h1 className="text-lg font-bold mb-4">Notifications</h1>
      <div className="w-full">
        {notifications?.length === 0 ? (
          <div className="w-full flex flex-col items-center">
            <h1 className="font-bold">All Cought Up!</h1>
          </div>
        ) : (
          <Timeline color={"#0075FF"} className="pl-8 w-full" bulletSize={35}>
            {notifications.map((notif: any, index: number) => {
              return (
                <Timeline.Item
                  key={index}
                  bullet={<FaCheckCircle color="#0075FF" size={30} />}
                  title={notif.time}
                  className="w-full bg-blue-50 pt-4 pb-6"
                >
                  <p className="text-sm">{notif.message}</p>
                  <div className="flex items-center gap-10 mt-1">
                    <p className="text-sm">{2} hours ago</p>
                  </div>
                </Timeline.Item>
              );
            })}
          </Timeline>
        )}
      </div>
    </div>
  );
};
export default AdminNotificationsPage;
