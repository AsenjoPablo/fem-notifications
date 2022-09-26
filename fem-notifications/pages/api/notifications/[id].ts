// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { NotificationItem } from "../../../shared/types";
import { Users } from "../../../shared/users";
import { NotificationsDataResponse } from "../types";

const NotificationTypes: NotificationItem[] = [];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<NotificationsDataResponse>
) {
  console.log("Requesting notifications", req.query.id);

  const data = [];

  // populate data
  for (let index = 0; index < 10; index++) {
    // user is randomly picked from external constant
    const user = Users[Math.floor(Math.random() * Users.length)];

    // content is generated
    // there are different notification types available
    const notificationType = Math.floor(
      Math.random() * NotificationTypes.length
    );

    // notification is pushed
    data.push({
      id: "1",
      from: user,
      to: "receiver",
      content: "reacted to your recent post",
      isNew: true,
      reference: {
        text: "My article post",
        link: "http://google.es",
      },
    });
  }

  res.status(200).json({
    data,
  });
}
