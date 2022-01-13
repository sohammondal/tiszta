import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { categories, homeCareProducts, personalCareProducts } from '../../mocks'
import { ICategory, IProduct } from '../../types'

interface Return {
    isLoading: boolean
    category: ICategory | null
    products: IProduct[]
}

export const useData = (): Return => {
    const [category, setCategory] = useState<ICategory | null>(null)
    const [products, setProducts] = useState<IProduct[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { pathname } = useLocation()

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            try {
                if (pathname === '/category/home-care') {
                    setProducts([...homeCareProducts])
                    setCategory(categories[1])
                } else if (pathname === '/category/personal-care') {
                    setProducts([...personalCareProducts])
                    setCategory(categories[2])
                } else {
                    // all products
                    setProducts([...homeCareProducts, ...personalCareProducts])
                    setCategory(categories[0])
                }
            } catch (error: unknown) {
                //TODO - Use Sentry or similar apps
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }, 2500)
    }, [pathname])

    return { isLoading, category, products }
}
