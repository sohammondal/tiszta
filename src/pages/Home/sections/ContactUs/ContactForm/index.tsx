import React from 'react'

import { Spinner } from 'components'

import { Container } from './styles'

export const ContactFrom: React.FC = () => {
    const [isLoading, setIsLoading] = React.useState(false)

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        setIsLoading(true)

        const form = e.target as HTMLFormElement
        const email = (form['0'] as HTMLInputElement)?.value
        const message = (form['1'] as HTMLTextAreaElement)?.value
        console.log({ email, message })

        /* fake async */
        setTimeout(() => {
            form.reset()
            setIsLoading(false)
        }, 3000)
    }

    return (
        <Container>
            <h1>CONTACT</h1>
            <form onSubmit={handleFormSubmit}>
                <input
                    required
                    disabled={isLoading}
                    type="email"
                    placeholder="Type your email..."
                    autoComplete="off"
                    pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z0-9.-]{1,}[.]{1}[a-zA-Z0-9]{2,}"
                    onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                        e.target.setCustomValidity('')
                    }}
                    onInvalid={(e: React.ChangeEvent<HTMLInputElement>) => {
                        e.target.setCustomValidity('Enter a valid email')
                    }}
                />
                <textarea
                    required
                    disabled={isLoading}
                    placeholder="Type your message here..."
                />
                <button type="submit" disabled={isLoading}>
                    {isLoading ? <Spinner size="18px" /> : 'Submit'}
                </button>
            </form>
        </Container>
    )
}
