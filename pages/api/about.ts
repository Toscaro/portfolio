import type { NextApiRequest, NextApiResponse } from 'next'
import { getAbout } from '../../lib/data-interface';

export default async function loadAbout(request: NextApiRequest, response: NextApiResponse) {
    const result = await getAbout

    response.status(200).json({
         about: result
    })
}