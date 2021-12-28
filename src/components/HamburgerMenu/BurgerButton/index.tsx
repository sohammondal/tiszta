import React from 'react'

import { Button } from './styles'

interface Props {
    open: boolean
    toggle: () => void
}

export const BurgerButton: React.FC<Props> = ({ open, toggle }) => {
    return (
        <Button $open={open} onClick={toggle}>
            <span />
            <span />
            <span />
        </Button>
    )
}
