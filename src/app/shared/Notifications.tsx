import { Timeline } from "@mantine/core";
import { notificationsData as notifications } from "../_client/owner/Home";
import { FaCheckCircle } from "react-icons/fa";

/* eslint-disable @typescript-eslint/no-explicit-any */
const NotificationsPage = () => {
  return (
    <div className="w-full px-20 pb-20 flex flex-col gap-3">
      <h1 className="text-3xl font-bold mb-4">Notifications</h1>
      <div className="w-full">
        <Timeline color={"#0075FF"} className="pl-8 w-full" bulletSize={35}>
          {notifications.map((notif: any, index: number) => {
            return (
              <Timeline.Item
                key={index}
                bullet={<FaCheckCircle color="#0075FF" size={30} />}
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
export default NotificationsPage;
