// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const Image = require("../../data/image.json");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.json(Image);
}
