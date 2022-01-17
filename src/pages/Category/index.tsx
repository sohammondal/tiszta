import { GetServerSidePropsContext } from 'next'
import React from 'react'

import { ContactUs } from 'pages/home/sections'
import { ICategory, IProduct } from 'types'

import { NavBar, Products } from './components'
import { Container } from './styles'

// This gets called on every request
export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    try {
        const categoriesResp = await fetch('http://localhost:3000/api/category')
        const categories: ICategory[] = await categoriesResp.json()
        const category = categories.find(
            (category) => category.slug === (ctx.query.category || '')
        )

        const productsResp = await fetch(
            `http://localhost:3000/api/product?category=${ctx.query.category}`
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

export const Category: React.FC<Props> = ({
    products,
    categories,
    category,
}) => (
    <Container>
        <NavBar categories={categories} />
        <Products products={products} category={category} />
        <ContactUs />
    </Container>
)

export default Category
