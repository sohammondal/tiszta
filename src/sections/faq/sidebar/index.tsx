import React from 'react'

import { Logo } from 'components'
import { scrollTo } from 'helpers'

import { Container, Wrapper, LogoWrapper } from './styles'

import { pageSectionIds } from '../../../constants'

type ClickEvent = React.MouseEvent<HTMLAnchorElement, MouseEvent>

const listItems = [
    {
        href: '',
        children: 'FAQs',
        onClick: (e: ClickEvent) => {
            e.preventDefault()
            scrollTo(pageSectionIds.FAQ.faq, {
                block: 'start',
                inline: 'start',
            })
        },
    },
    {
        href: '',
        children: ' Privacy Policy',
        onClick: (e: ClickEvent) => {
            e.preventDefault()
            scrollTo(pageSectionIds.FAQ.privacyPolicy)
        },
    },
    {
        href: '',
        children: 'Terms of Service',
        onClick: (e: ClickEvent) => {
            e.preventDefault()
            scrollTo(pageSectionIds.FAQ.termsOfService)
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
                            <a {...item} />
                        </li>
                    ))}
                </ul>
            </Wrapper>
        </Container>
    )
}
