import { NextApiRequest, NextApiResponse } from 'next'

import { categories } from 'mocks'

export default (req: NextApiRequest, res: NextApiResponse) => {
    const category = categories.find(
        (category) => category.uuid === req.query.uuid
    )
    if (category) {
        return res.status(200).json(category)
    }

    res.status(404).json({ message: 'category not found' })
}
