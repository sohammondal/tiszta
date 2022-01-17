import { NextApiRequest, NextApiResponse } from 'next'

import { categories } from 'mocks'

export default (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(categories)
}
