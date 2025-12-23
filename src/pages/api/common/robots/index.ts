import { commonConfig } from "@/utils/config";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (_: NextApiRequest, res: NextApiResponse) => {
  let robotsText =
    commonConfig.APP_ENV === "production"
      ? `User-agent: *
Allow /`
      : `User-agent: *
Disallow /`;
  res.send(robotsText);
};

export default handler;
