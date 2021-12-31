import React from 'react'
import { Link } from 'react-router-dom'

import { Logo } from 'components'

import { Container, Wrapper, LogoWrapper } from './styles'

import { pageSectionIds } from '../../../constants'

const listItems = [
    {
        to: '',
        children: 'FAQs',
        state: {
            section: pageSectionIds.FAQ.faq,
        },
    },
    {
        to: '',
        children: 'Privacy Policy',
        state: {
            section: pageSectionIds.FAQ.privacyPolicy,
        },
    },
    {
        to: '',
        children: 'Terms of Service',
        state: {
            section: pageSectionIds.FAQ.termsOfService,
        },
    },
]

export const SideBar: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <LogoWrapper>
                    <Logo fill="#000" />
                </LogoWrapper>
                <ul>
                    {listItems.map((item, index) => (
                        <li key={`sidebar-list-item-${index}`}>
                            <Link {...item} />
                        </li>
                    ))}
                </ul>
            </Wrapper>
        </Container>
    )
}
