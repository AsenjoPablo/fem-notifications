import Head from "next/head";
import { useEffect, useState } from "react";
import Notification from "../components/Notification";
import { NotificationItem } from "../shared/types";

const Home = () => {
  const [notificationsList, setNotificationsList] = useState<
    NotificationItem[]
  >([]);
  [];

  // toggles state of notifications
  const setAllRead = () => {
    setNotificationsList([
      ...notificationsList.map((notification) => ({
        ...notification,
        isNew: false,
      })),
    ]);
  };

  // loads notifications on initialization
  useEffect(() => {
    // function declaration for async useEffect
    const fetchData = async () => {
      const response = await fetch("/api/notifications/user_id");
      return response.json();
    };

    fetchData().then((res) => setNotificationsList(res.data));
  }, []);

  return (
    <div className="min-h-screen w-full bg-neutral-200 flex flex-col items-center">
      <Head>
        <title>Notifications APP</title>
        <meta name="description" content="Shows notifications for your page" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      {/* main container */}
      <main className="bg-white h-screen p-6 w-full max-w-xl rounded flex flex-col items-center text-slate-900">
        {/* header */}
        <div className="flex justify-between w-full my-3">
          <div className="flex items-center gap-2">
            <h1 className="font-bold text-xl">Notifications</h1>
            <span className="bg-primary-blue px-2 text-white rounded">
              {
                notificationsList.filter((notification) => notification.isNew)
                  .length
              }
            </span>
          </div>

          {notificationsList.filter((notification) => notification.isNew)
            .length > 0 && (
            <button
              type="button"
              onClick={setAllRead}
              className="bg-transparent text-neutral-600 text-sm hover:text-neutral-500 duration-150"
            >
              Mark all as read
            </button>
          )}
        </div>

        <div className="flex flex-col w-full gap-y-4 overflow-auto">
          {/* Notifications */}
          {notificationsList.map((notification) => (
            <Notification key={notification.id} notification={notification} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
