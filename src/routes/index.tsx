import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Home, FAQ, Products, NotFound, Category } from 'pages'

export const AppRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/product/*" element={<Products />} />
            <Route path="/category/*" element={<Category />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
    )
}
