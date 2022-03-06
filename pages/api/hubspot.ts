// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const portalId = '20809680'
  const formId = '764a9dda-8540-4819-9256-687ed30d62a5'

  if (req.method === 'POST') {
    try {
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(req.body),
        }
      )
      if (!response.ok) {
        return res.status(response.status).json(response.statusText)
      }
        const data = await response.json()

        return res.status(200).json(data)
        
    } catch (error) {
        return res.status(500).json(error)
    }
  }
}
