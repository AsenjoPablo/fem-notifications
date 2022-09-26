import Link from "next/link";
import React from "react";
import Image from "next/future/image";
import { NotificationItem } from "../shared/types";

export default function Notification({
  notification,
  onClickNotification,
}: {
  notification: NotificationItem;
  onClickNotification: (id: string) => void;
}) {
  return (
    <button
      onClick={() => onClickNotification(notification.id)}
      className={`rounded-lg p-4 w-full flex gap-x-3 relative ${
        notification.isNew ? "bg-neutral-200" : ""
      }`}
    >
      {/* <div className=" bg-primary-red h-12 w-12 rounded-full aspect-square"></div> */}
      <Image
        src={notification.from.avatar_url}
        alt="a person's avatar picture"
        width={48}
        height={48}
        className="rounded-full h-12 w-12 object-cover"
      />
      <div className="text-neutral-600 text-start">
        <strong className="text-black">{notification.from.name}</strong>
        {" " + notification.content}
        {notification.reference && (
          <Link href="/">
            <a className="text-primary-blue font-semibold">
              {" " + notification.reference.title}
            </a>
          </Link>
        )}
        {notification.message && (
          <p className="bg-white border border-neutral-400 p-3 rounded my-3">
            {notification.message}
          </p>
        )}
        {notification.reference?.image_url && (
          <Image
            src={notification.reference.image_url}
            alt={notification.reference.title}
            width={100}
            height={100}
            className="h-16 w-24 object-cover rounded my-3"
          />
        )}
      </div>
      {notification.isNew && (
        <span className="absolute left-4 top-4 rounded-full inline-block h-3 w-3 bg-primary-red animate-pulse"></span>
      )}
    </button>
  );
}
