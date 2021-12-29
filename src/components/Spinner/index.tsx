import React from 'react'
import styled, { css } from 'styled-components'

interface Props {
    size?: string
}

const Svg = styled.svg<Props>`
    animation: rotate 2s linear infinite;
    z-index: 2;
    ${({ size }) => css`
        width: ${size};
        height: ${size};
    `}

    circle {
        stroke: white;
        stroke-linecap: round;
        animation: dash 1.5s ease-in-out infinite;
    }

    @keyframes dash {
        0% {
            stroke-dasharray: 1, 150;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -35;
        }
        100% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -124;
        }
    }
`

export const Spinner: React.FC<Props> = ({ size }) => {
    return (
        <Svg size={size} viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
        </Svg>
    )
}

Spinner.defaultProps = {
    size: '20px',
}
