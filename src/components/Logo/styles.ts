import styled, { css } from 'styled-components'

export const StyledSvg = styled.svg<{ scaleOnHover?: boolean }>`
    cursor: pointer;
    transition: transform ease 0.3s;
    ${(props) =>
        props.scaleOnHover &&
        css`
            :hover {
                transform: scale(1.4);
            }
        `}
`
