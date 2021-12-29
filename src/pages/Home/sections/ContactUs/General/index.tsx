import React from 'react'
import { Link } from 'react-router-dom'

import { Container } from './styles'

import { pageSectionIds } from '../../../../../constants'

const listItems = [
    {
        to: '/faq',
        children: 'FAQs',
        state: {
            section: pageSectionIds.FAQ.faq,
        },
    },
    {
        to: '/faq',
        children: 'Privacy Policy',
        state: {
            section: pageSectionIds.FAQ.privacyPolicy,
        },
    },
    {
        to: '/faq',
        children: 'Terms of Service',
        state: {
            section: pageSectionIds.FAQ.termsOfService,
        },
    },
]

export const General: React.FC = () => {
    return (
        <Container>
            <h1>GENERAL</h1>
            <ul>
                {listItems.map((item, index) => (
                    <li key={`general-list-item-${index}`}>
                        <Link {...item} />
                    </li>
                ))}
            </ul>
        </Container>
    )
}
