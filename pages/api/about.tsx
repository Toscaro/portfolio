import type { NextApiRequest, NextApiResponse } from 'next'

export default async (request: NextApiRequest, response: NextApiResponse) => {
    const result = await fetch(`${process.env.API_BASE_PATH}/about.json`);
    const json = await result.json();

    response.status(200).json({
         about: json.about
    })
}