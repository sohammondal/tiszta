import React from 'react'
import Skeleton from 'react-loading-skeleton'

import { IProduct } from 'types'

import { Container, ImgSkeleton, PSkeleton } from './styles'

import { ContactUs, NavBar } from '../home'

export const Product: React.FC<{ product: IProduct }> = ({ product }) => {
    const imgSrc = (product?.images || [])[0]

    return (
        <Container>
            <NavBar />
            <main>
                <section>
                    {imgSrc ? <img src={imgSrc} /> : <ImgSkeleton />}
                </section>
                <section>
                    <h1>
                        {product?.name ? (
                            product?.name
                        ) : (
                            <Skeleton width="90%" />
                        )}
                    </h1>
                    <p>
                        {product?.description ? (
                            product?.description
                        ) : (
                            <>
                                <PSkeleton count={5} width="80%" />
                                <PSkeleton count={2} width="60%" />
                                <PSkeleton count={3} width="40%" />
                            </>
                        )}
                    </p>
                </section>
            </main>
            <ContactUs />
        </Container>
    )
}

export default Product
