import Link from "next/link";
import React from "react";
import Image from "next/future/image";
import { NotificationItem } from "../shared/types";

export default function Notification({
  notification,
}: {
  notification: NotificationItem;
}) {
  return (
    <div
      className={`rounded-lg p-4 w-full flex gap-x-3 ${
        notification.isNew ? "bg-neutral-200" : ""
      }`}
    >
      {/* <div className=" bg-primary-red h-12 w-12 rounded-full aspect-square"></div> */}
      <Image
        src={notification.from.avatar_url}
        alt="a person's avatar picture"
        width={48}
        height={48}
        className="rounded-full h-full aspect-square object-cover"
      />
      <p className="text-neutral-600">
        <strong className="text-black">{notification.from.name}</strong>
        {" " + notification.content}
        {notification.reference && (
          <Link href="/reference-link">
            <a className="text-primary-blue font-semibold">
              {" " + notification.reference.text}
            </a>
          </Link>
        )}
        {notification.isNew && (
          <span className="rounded-full inline-block mx-2 h-3 w-3 bg-primary-red animate-pulse"></span>
        )}
        {notification.message && (
          <p className="bg-white border border-neutral-400 p-3 rounded my-3">
            {notification.message}
          </p>
        )}
      </p>
    </div>
  );
}
