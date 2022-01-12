import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import { ContactUs } from 'pages/Home/sections'

import { NavBar, Products } from './components'
import { Container } from './styles'

const AllProducts: React.FC = () => {
    const { pathname } = useLocation()

    return pathname !== '/category' ? null : <Products />
}

export const Category: React.FC = () => {
    return (
        <Container>
            <NavBar />
            <AllProducts />
            <Routes>
                <Route path="home-care" element={<Products />} />
                <Route path="personal-care" element={<Products />} />
            </Routes>
            <ContactUs />
        </Container>
    )
}
