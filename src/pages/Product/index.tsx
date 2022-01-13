import React from 'react'
import Skeleton from 'react-loading-skeleton'

import { ContactUs, NavBar } from 'pages/Home/sections'

import { Container, ImgSkeleton, PSkeleton } from './styles'
import { useData } from './useData'

export const Product: React.FC = () => {
    const { isLoading, product } = useData()

    return (
        <Container>
            <NavBar />
            <main>
                <section>
                    {isLoading ? (
                        <ImgSkeleton />
                    ) : (
                        <img src={(product?.images || [])[0]} />
                    )}
                </section>
                <section>
                    <h1>
                        {isLoading ? <Skeleton width="90%" /> : product?.name}
                    </h1>
                    <p>
                        {isLoading ? (
                            <>
                                <PSkeleton count={5} width="80%" />
                                <PSkeleton count={2} width="60%" />
                                <PSkeleton count={3} width="40%" />
                            </>
                        ) : (
                            product?.description
                        )}
                    </p>
                </section>
            </main>
            <ContactUs />
        </Container>
    )
}
