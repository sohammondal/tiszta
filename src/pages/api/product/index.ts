import { NextApiRequest, NextApiResponse } from 'next'

import { homeCareProducts, personalCareProducts, products } from 'mocks'

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.query.category === 'home-care') {
        return res.status(200).json(homeCareProducts)
    }
    if (req.query.category === 'personal-care') {
        return res.status(200).json(personalCareProducts)
    }
    res.status(200).json(products)
}
