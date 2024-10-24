import { Timeline } from "@mantine/core";
import {
  format,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from "date-fns";
import { FaCheckCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
const OwnerNotificationsPage = () => {
  const { notifications } = useSelector((state: any) => state.notifications);
  const [timeAgoTexts, setTimeAgoTexts] = useState<string[]>([]);

  useEffect(() => {
    const updateTimeAgoTexts = () => {
      const now = new Date();
      const newTimeAgoTexts = notifications.map((notif: any) => {
        const notifTime = new Date(notif.time);
        const hoursAgo = differenceInHours(now, notifTime);
        const minutesAgo = differenceInMinutes(now, notifTime);
        const secondsAgo = differenceInSeconds(now, notifTime);

        if (secondsAgo < 60) {
          return "now";
        } else if (minutesAgo < 60) {
          return `${minutesAgo} ${minutesAgo === 1 ? "minute" : "minutes"} ago`;
        } else {
          return `${hoursAgo} ${hoursAgo === 1 ? "hour" : "hours"} ago`;
        }
      });

      setTimeAgoTexts(newTimeAgoTexts);
    };
    updateTimeAgoTexts();
    const interval = setInterval(updateTimeAgoTexts, 60000);
    return () => clearInterval(interval);
  }, [notifications]);

  return (
    <div className="w-full pb-20 flex flex-col gap-3  px-32 ">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      <div className="w-full">
        {notifications?.length === 0 ? (
          <div className="w-full flex flex-col items-center">
            <h1 className="font-bold">All Caught Up!</h1>
          </div>
        ) : (
          <Timeline color={"#0075FF"} className="pl-8 w-full" bulletSize={30}>
            {notifications.map((notif: any, index: number) => {
              const notifTime = new Date(notif.time);

              return (
                <Timeline.Item
                  key={index}
                  bullet={<FaCheckCircle color="#0075FF" size={20} />}
                  title={format(notifTime, "yyyy MMMM dd HH:mm:ss")}
                  className="w-full bg-blue-50 pt-4 pb-6"
                >
                  <p className="text-sm">{notif.message}</p>
                  <div className="flex items-center gap-10 mt-1">
                    <p className="text-sm">{timeAgoTexts[index]}</p>
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

export default OwnerNotificationsPage;
