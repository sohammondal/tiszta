import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { products } from 'pages/Category/mocks'
import { IProduct } from 'pages/Category/types'

interface Return {
    isLoading: boolean
    product: IProduct | undefined
}

export const useData = (): Return => {
    const location = useLocation()
    const uuid = location.pathname.replace('/product/', '')
    const state = location.state as IProduct
    const [product, setProduct] = useState<IProduct | undefined>()
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        try {
            if (state) {
                setProduct(state)
                setIsLoading(false)
                return
            }
            if (uuid) {
                setTimeout(() => {
                    const product = products.find(
                        (product) => product.uuid === uuid
                    )
                    setProduct(product)
                    setIsLoading(false)
                }, 2500)
            }
        } catch (error: unknown) {
            console.log(error)
        }
    }, [uuid, state])

    return { isLoading, product }
}
