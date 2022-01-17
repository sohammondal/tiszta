// import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

import { ICategory, IProduct } from 'types'

import {
    Container,
    Description,
    ProductsContainer,
    ProductItem,
} from './styles'

const Product: React.FC<IProduct> = (props) => {
    const imgSrc = (props?.images || [])[0]

    const router = useRouter()

    return (
        <a
            href={`/product/${props.uuid}`}
            onClick={(e) => {
                e.preventDefault()
                router.push(
                    {
                        pathname: `/product/${props.uuid}`,
                        query: {
                            product: JSON.stringify(props),
                        },
                    },
                    `/product/${props.uuid}`
                )
            }}
        >
            <ProductItem hover>
                <div>
                    <img src={imgSrc} alt={props?.name} />
                    <span>{props?.name}</span>
                </div>
            </ProductItem>
        </a>
    )
}

interface Props {
    products: IProduct[]
    category: ICategory
}

export const Products: React.FC<Props> = ({ products, category }) => {
    return (
        <Container>
            <Description>
                <h1>{category?.name}</h1>
                <p>{category?.description}</p>
            </Description>
            <ProductsContainer>
                {products?.map((product) => (
                    <Product key={product.uuid} {...product} />
                ))}
            </ProductsContainer>
        </Container>
    )
}
