import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { Link } from 'react-router-dom'

import {
    Container,
    Description,
    ProductsContainer,
    ProductItem,
} from './styles'

import { useData } from '../../hooks/useData'
import { IProduct } from '../../types'

import 'react-loading-skeleton/dist/skeleton.css'

const Product: React.FC<IProduct> = (props) => {
    const imgSrc = (props?.images || [])[0]
    return (
        <Link to={`/product/${props.uuid}`} state={props}>
            <ProductItem hover>
                <div>
                    <img src={imgSrc} alt={props?.name} />
                    <span>{props?.name}</span>
                </div>
            </ProductItem>
        </Link>
    )
}

const ProductSkeleton = () => {
    return (
        <ProductItem>
            <div>
                <Skeleton height={300} width={300} />
                <span>
                    <Skeleton width={'80%'} />
                </span>
            </div>
        </ProductItem>
    )
}

export const Products: React.FC = () => {
    const { isLoading, products, category } = useData()

    return (
        <Container>
            <Description>
                <h1>{isLoading ? <Skeleton /> : category?.name}</h1>
                <p>
                    {isLoading ? <Skeleton count={3} /> : category?.description}
                </p>
            </Description>
            <ProductsContainer>
                {isLoading
                    ? [1, 2, 3, 4, 5].map((_, index) => (
                          <ProductSkeleton key={index} />
                      ))
                    : products.map((product) => (
                          <Product key={product.uuid} {...product} />
                      ))}
            </ProductsContainer>
        </Container>
    )
}
