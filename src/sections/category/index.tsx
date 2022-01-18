/* eslint-disable react/display-name */

// export { NavBar } from './nav-bar'
// export { Products } from './products'

import { GetServerSidePropsContext } from 'next'
import React from 'react'

import { ICategory, IProduct } from 'types'

import { NavBar } from './nav-bar'
import { Products } from './products'

import { ContactUs } from '../home'

// This gets called on every request
export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    console.log(process.env.HOST)
    console.log(process.env.ENV)
    console.log(ctx.resolvedUrl)
    console.log(ctx.req.url)
    console.log(ctx.query)
    console.log(ctx.params)
    try {
        const categoriesResp = await fetch(`${process.env.HOST}/api/category`)
        const categories: ICategory[] = await categoriesResp.json()
        const category = categories.find(
            (category) => category.slug === (ctx.query.category || '')
        )

        const productsResp = await fetch(
            `${process.env.HOST}/api/product?category=${ctx.query.category}`
        )
        const products = await productsResp.json()

        return {
            props: {
                category,
                products,
                categories,
            },
        }
    } catch (error) {
        console.log(error)
    }
}

interface Props {
    products: IProduct[]
    categories: ICategory[]
    category: ICategory
}

export const category: React.FC<Props> = ({
    products,
    categories,
    category,
}) => (
    <>
        <NavBar categories={categories} />
        <Products products={products} category={category} />
        <ContactUs />
    </>
)
