export const scrollTo = (elemId: string, options?: ScrollIntoViewOptions) => {
    if (!elemId) return
    try {
        const elem = document.getElementById(elemId)
        if (elem) {
            elem?.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center',
                ...options,
            })
        }
    } catch (error) {
        console.log(error)
    }
}
