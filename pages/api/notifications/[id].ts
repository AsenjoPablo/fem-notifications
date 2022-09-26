// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Messages, Posts, Users } from "../../../shared/data";
import { NotificationsDataResponse } from "../types";
import { v4 as uuidv4 } from "uuid";
import { Post } from "../../../shared/types";

const NotificationTypes: string[] = ["follow", "reaction", "like", "message"];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<NotificationsDataResponse>
) {
  const data = [];
  const notificationsNumber = Math.floor(Math.random() * (50 - 15) + 15);

  // populate data
  for (let index = 0; index < notificationsNumber; index++) {
    // user is randomly picked from external constant
    const user = Users[Math.floor(Math.random() * Users.length)];

    // content is generated
    // there are different notification types available
    const notificationType = Math.floor(
      Math.random() * NotificationTypes.length
    );

    const randomPost: Post = Posts[Math.floor(Math.random() * Posts.length)];

    switch (notificationType) {
      case 0:
        data.push({
          id: uuidv4(),
          from: user,
          to: "receiver",
          content: "followed you",
          isNew: true,
        });
        break;
      case 1:
        data.push({
          id: uuidv4(),
          from: user,
          to: "receiver",
          content: "reacted to your recent post",
          isNew: true,
          reference: {
            id: uuidv4(),
            title: randomPost.title,
            link: "http://google.es",
            image_url: randomPost.image_url,
          },
        });
        break;
      case 2:
        data.push({
          id: uuidv4(),
          from: user,
          to: "receiver",
          content: "liked your post",
          isNew: true,
          reference: {
            id: uuidv4(),
            title: randomPost.title,
            link: "http://google.es",
            image_url: randomPost.image_url,
          },
        });
        break;
      case 3:
        const message = Messages[Math.floor(Math.random() * Messages.length)];
        data.push({
          id: uuidv4(),
          from: user,
          to: "receiver",
          content: "sent you a message",
          isNew: true,
          message:
            message.length > 140 ? `${message.substring(0, 140)}...` : message, // truncates at 140 characters
        });
        break;

      default:
        break;
    }
  }

  res.status(200).json({
    data,
  });
}
