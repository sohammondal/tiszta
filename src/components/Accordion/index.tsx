import React from 'react'
import Collapsible from 'react-collapsible'

import { Wrapper } from './styles'

type Props = React.ComponentProps<typeof Collapsible>

const chevronIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14.208"
        height="9.79"
        viewBox="0 0 14.208 9.79"
    >
        <path
            d="M2964.566,195.173l5.574,6.52,6.425-6.52"
            transform="translate(-2963.426 -194.12)"
            fill="none"
            stroke="#606060"
            strokeWidth="3"
        ></path>
    </svg>
)

export const Accordion: React.FC<Props> = ({ trigger, ...props }) => {
    return (
        <Wrapper>
            <Collapsible
                {...props}
                trigger={
                    typeof trigger === 'string' ? (
                        <>
                            <h3>{trigger}</h3>
                            <span>{chevronIcon}</span>
                        </>
                    ) : (
                        trigger
                    )
                }
            />
        </Wrapper>
    )
}

Accordion.defaultProps = {
    children: (
        <>
            <p>
                This is the collapsible content. It can be any element or React
                component you like.
            </p>
            <p>
                It can even be another Collapsible component. Check out the next
                section!
            </p>
        </>
    ),
}
