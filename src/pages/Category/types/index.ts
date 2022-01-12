export interface ICategory {
    uuid: string
    name: string
    description?: string
    image?: string
}

export interface IProduct {
    uuid: string
    name: string
    category: ICategory
    description?: string
    ingredients?: [
        {
            name: string
            quantity: string
        }
    ]
    images?: string[]
}
