import React from 'react'

import { Container, Section } from './styles'

import { pageSectionIds } from '../../../constants'

export const About: React.FC = () => {
    return (
        <Container id={pageSectionIds.HOME.about}>
            <Section>
                <h1>Est 2021</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                </p>
            </Section>
            <Section>
                <img
                    src="http://canopusglobal.com/wp-content/uploads/2016/08/service-3.jpg"
                    alt="all-products"
                />
            </Section>
        </Container>
    )
}
