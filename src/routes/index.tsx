import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Home, FAQ, Products, NotFound } from 'pages'

export const AppRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/products" element={<Products />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
    )
}
