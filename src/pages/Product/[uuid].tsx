import isEmpty from 'lodash/isEmpty'
import { GetServerSidePropsContext } from 'next'
import React from 'react'
import Skeleton from 'react-loading-skeleton'

import { ContactUs, NavBar } from 'pages/home/sections'
import { IProduct } from 'types'

import { Container, ImgSkeleton, PSkeleton } from './styles'

// This gets called on every request
export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    try {
        /* product from internal route */
        if (ctx.query.product) {
            const product = JSON.parse((ctx.query.product as string) || '{}')
            if (!isEmpty(product)) {
                return {
                    props: {
                        product,
                    },
                }
            }
        }

        const resp = await fetch(
            `http://localhost:3000/api/product/${ctx.query.uuid}`
        )
        const product = await resp.json()

        return {
            props: {
                product,
            },
        }
    } catch (error) {
        console.log(error)
    }
}

const Product: React.FC<{ product: IProduct }> = ({ product }) => {
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
