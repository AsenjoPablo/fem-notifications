// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { NotificationsDataResponse } from "./types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<NotificationsDataResponse>
) {
  res.status(200).json({
    data: [],
  });
}
