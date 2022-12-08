// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const Story = require("../../data/story.json");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.json(Story);
}
