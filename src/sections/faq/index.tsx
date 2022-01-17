import { useRouter } from 'next/router'
import React from 'react'

import { scrollTo } from 'helpers'

import { FAQs } from './faqs'
import { SideBar } from './sidebar'
import { Container, Main } from './styles'

import { pageSectionIds } from '../../constants'

export const faq: React.FC = () => {
    const router = useRouter()

    React.useEffect(() => {
        const section = router.query.section as string
        scrollTo(section)
    }, [router.query])

    return (
        <Container>
            <SideBar />
            <Main>
                <FAQs />
                <section id={pageSectionIds.FAQ.privacyPolicy}>
                    <h1>Privacy Policy</h1>
                </section>
                <section id={pageSectionIds.FAQ.termsOfService}>
                    <h1>Terms Of Service</h1>
                </section>
            </Main>
        </Container>
    )
}
