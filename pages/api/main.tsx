import { NextApiRequest, NextApiResponse } from "next"


const Api = (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json({ 
      status: {
        code: 200,
        success: true
      },
      data: null,
      message: 'Hello from the other side!'
  });
}


export default Api;