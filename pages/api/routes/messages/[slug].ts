// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const MSG = require("../../data/msg.json");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let { slug } = req.query;
  let length = MSG.length;
  return res.json(MSG[Number(slug) % length]);
}
