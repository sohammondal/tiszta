/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'

import { Label } from './styles'

interface Props {
    isDark?: boolean
    onChange?: () => void
    invertedIconLogic?: boolean
}

export const ThemeToggler: React.FC<Props> = ({
    isDark = false,
    onChange = () => {},
    invertedIconLogic = false,
}) => (
    <Label
        title={isDark ? 'Activate light mode' : 'Activate dark mode'}
        aria-label={isDark ? 'Activate light mode' : 'Activate dark mode'}
    >
        <input
            type="checkbox"
            defaultChecked={invertedIconLogic ? !isDark : isDark}
            onChange={onChange}
        />
        <div />
    </Label>
)
