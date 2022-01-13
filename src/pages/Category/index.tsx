import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import { ContactUs } from 'pages/Home/sections'

import { NavBar, Products } from './components'
import { Container } from './styles'

export const Category: React.FC = () => {
    const { pathname } = useLocation()

    return (
        <Container>
            <NavBar />
            {pathname === '/category' && <Products />}
            <Routes>
                <Route path="home-care" element={<Products />} />
                <Route path="personal-care" element={<Products />} />
            </Routes>
            <ContactUs />
        </Container>
    )
}
