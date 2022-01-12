import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLocation } from 'react-router-dom'

import {
    Container,
    Description,
    ProductsContainer,
    ProductItem,
} from './styles'

import { categories, homeCareProducts, personalCareProducts } from '../../mocks'
import { ICategory, IProduct } from '../../types'

import 'react-loading-skeleton/dist/skeleton.css'

const Product: React.FC<IProduct> = (props) => {
    const imgSrc = (props?.images || [])[0]
    return (
        <ProductItem>
            <div>
                <img src={imgSrc} alt={props?.name} />
                <span>{props?.name}</span>
            </div>
        </ProductItem>
    )
}

const ProductSkeleton = () => {
    return (
        <ProductItem>
            <div>
                <Skeleton height={300} width={300} />
                <span>
                    <Skeleton />
                </span>
            </div>
        </ProductItem>
    )
}

export const Products: React.FC = () => {
    const [category, setCategory] = React.useState<ICategory | null>(null)
    const [products, setProducts] = React.useState<IProduct[]>([])
    const { pathname } = useLocation()

    React.useEffect(() => {
        setTimeout(() => {
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
        }, 2500)
    }, [pathname])

    return (
        <Container>
            <Description>
                <h1>{category?.name || <Skeleton />}</h1>
                <p>{category?.description || <Skeleton count={3} />}</p>
            </Description>

            <ProductsContainer>
                {products.length
                    ? products.map(Product)
                    : [1, 2, 3, 4, 5].map(ProductSkeleton)}
            </ProductsContainer>
        </Container>
    )
}

Products.defaultProps = {}
