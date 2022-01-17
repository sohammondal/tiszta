import isEmpty from 'lodash/isEmpty'
import { GetServerSidePropsContext } from 'next'

export { Product as default } from 'sections/product'

// This gets called on every request
export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    try {
        /* product from internal route */
        if (ctx.query.product) {
            const product = JSON.parse((ctx.query.product as string) || '{}')
            if (!isEmpty(product)) {
                return {
                    props: {
                        product,
                    },
                }
            }
        }

        const resp = await fetch(
            `http://localhost:3000/api/product/${ctx.query.uuid}`
        )
        const product = await resp.json()

        return {
            props: {
                product,
            },
        }
    } catch (error) {
        console.log(error)
    }
}
