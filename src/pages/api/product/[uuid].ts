import { NextApiRequest, NextApiResponse } from 'next'

import { products } from 'mocks'

export default (req: NextApiRequest, res: NextApiResponse) => {
    const product = products.find((product) => product.uuid === req.query.uuid)
    if (product) {
        return res.status(200).json(product)
    }

    res.status(404).json({ message: 'product not found' })
}
