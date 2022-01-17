import React from 'react'

import { IProduct } from 'types'

import { Container } from './styles'

import { ContactUs, NavBar } from '../home'

export const product: React.FC<{ product: IProduct }> = ({ product }) => {
    const imgSrc = (product?.images || [])[0]

    return (
        <Container>
            <NavBar />
            <main>
                <section>
                    <img src={imgSrc} />
                </section>
                <section>
                    <h1>{product?.name}</h1>
                    <p>{product?.description}</p>
                </section>
            </main>
            <ContactUs />
        </Container>
    )
}

export default product
