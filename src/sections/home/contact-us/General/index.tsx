import Link from 'next/link'
import React from 'react'

import { Container } from './styles'

import { pageSectionIds } from '../../../../constants'

const listItems = [
    {
        as: '/faq',
        href: `/faq?section=${pageSectionIds.FAQ.faq}`,
        children: <a>FAQs</a>,
    },
    {
        as: '/faq',
        href: `/faq?section=${pageSectionIds.FAQ.privacyPolicy}`,
        children: <a>Privacy Policy</a>,
    },
    {
        as: '/faq',
        href: `/faq?section=${pageSectionIds.FAQ.termsOfService}`,
        children: <a>Terms of Service</a>,
    },
]

export const General: React.FC = () => {
    return (
        <Container>
            <h1>GENERAL</h1>
            <ul>
                {listItems.map((item, index) => (
                    <li key={`general-list-item-${index}`}>
                        <Link {...item} passHref />
                    </li>
                ))}
            </ul>
        </Container>
    )
}
