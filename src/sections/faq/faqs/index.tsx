import React from 'react'

import { Accordion } from 'components'

import { faqs } from './mocks'
import { Container, Accordions } from './styles'

import { pageSectionIds } from '../../../constants'

export const FAQs: React.FC = () => {
    return (
        <Container id={pageSectionIds.FAQ.faq}>
            <h1>FAQ</h1>
            <Accordions>
                {faqs.map((faq, index) => (
                    <Accordion key={`faq-${index}`} trigger={faq.question}>
                        <p>{faq.answer}</p>
                    </Accordion>
                ))}
            </Accordions>
        </Container>
    )
}
