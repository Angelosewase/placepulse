import { Timeline } from "@mantine/core";
import { notificationsData as notifications } from "./Home";
import { FaCheckCircle } from "react-icons/fa";

/* eslint-disable @typescript-eslint/no-explicit-any */
const AdminNotificationsPage = () => {
  return (
    <div className="w-full pb-20 flex flex-col gap-3">
      <h1 className="text-lg font-bold mb-4">Notifications</h1>
      <div className="w-full">
        <Timeline color={"#000"} className="pl-8 w-full" bulletSize={35}>
          {notifications.map((notif: any, index: number) => {
            return (
              <Timeline.Item
                key={index}
                bullet={<FaCheckCircle color="black" />}
                title={notif.time}
                className="w-full bg-blue-50 pt-4 pb-6"
              >
                <p className="text-sm">{notif.description}</p>
                <div className="flex items-center gap-10 mt-1">
                  <p className="text-sm">{2} hours ago</p>
                </div>
              </Timeline.Item>
            );
          })}
        </Timeline>
      </div>
    </div>
  );
};
export default AdminNotificationsPage;
