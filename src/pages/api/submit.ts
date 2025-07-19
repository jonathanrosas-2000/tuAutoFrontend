import type { NextApiRequest, NextApiResponse } from 'next';
import { buffer } from 'micro';

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const rawBody = (await buffer(req)).toString()

  const response = await fetch('https://formsubmit.net/forms/DATA_CLIENTE', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: rawBody,
  })

  res.status(response.status).end()
}
