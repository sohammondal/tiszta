import { ICategory, IProduct } from 'types'

export const categories: ICategory[] = [
    {
        uuid: '1',
        name: 'All Products',
        slug: '',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        image: '',
    },
    {
        uuid: '2',
        name: 'Home care',
        slug: 'home-care',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        image: '',
    },
    {
        uuid: '3',
        name: 'Personal care',
        slug: 'personal-care',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        image: '',
    },
]

export const homeCareProducts: IProduct[] = [
    {
        uuid: '1',
        name: 'Handwash',
        category: categories[1],
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        ingredients: [
            {
                name: '',
                quantity: '',
            },
        ],
        images: [
            'https://res.cloudinary.com/openhouse-study/image/upload/v1641977611/product.png',
            'https://res.cloudinary.com/openhouse-study/image/upload/v1641977611/product.png',
            'https://res.cloudinary.com/openhouse-study/image/upload/v1641977611/product.png',
        ],
    },
    {
        uuid: '2',
        name: 'Dishwash',
        category: categories[1],
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        ingredients: [
            {
                name: '',
                quantity: '',
            },
        ],
        images: [
            'https://res.cloudinary.com/openhouse-study/image/upload/v1641977611/product.png',
            'https://m.media-amazon.com/images/I/61fr8NXVjpS._SL1000_.jpg',
            'https://m.media-amazon.com/images/I/31gzOkuwu9L.jpg',
        ],
    },
    {
        uuid: '3',
        name: 'Laundry wash',
        category: categories[1],
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        ingredients: [
            {
                name: '',
                quantity: '',
            },
        ],
        images: [
            'https://res.cloudinary.com/openhouse-study/image/upload/v1641977611/product.png',
            'https://m.media-amazon.com/images/I/61fr8NXVjpS._SL1000_.jpg',
            'https://m.media-amazon.com/images/I/31gzOkuwu9L.jpg',
        ],
    },
    {
        uuid: '4',
        name: 'Toilet cleaner',
        category: categories[1],
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        ingredients: [
            {
                name: '',
                quantity: '',
            },
        ],
        images: [
            'https://res.cloudinary.com/openhouse-study/image/upload/v1641977611/product.png',
            'https://m.media-amazon.com/images/I/61fr8NXVjpS._SL1000_.jpg',
            'https://m.media-amazon.com/images/I/31gzOkuwu9L.jpg',
        ],
    },
    {
        uuid: '5',
        name: 'Floor cleaner',
        category: categories[1],
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        ingredients: [
            {
                name: '',
                quantity: '',
            },
        ],
        images: [
            'https://res.cloudinary.com/openhouse-study/image/upload/v1641977611/product.png',
            'https://m.media-amazon.com/images/I/61fr8NXVjpS._SL1000_.jpg',
            'https://m.media-amazon.com/images/I/31gzOkuwu9L.jpg',
        ],
    },
    {
        uuid: '6',
        name: 'Glass cleaner',
        category: categories[1],
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        ingredients: [
            {
                name: '',
                quantity: '',
            },
        ],
        images: [
            'https://res.cloudinary.com/openhouse-study/image/upload/v1641977611/product.png',
            'https://m.media-amazon.com/images/I/61fr8NXVjpS._SL1000_.jpg',
            'https://m.media-amazon.com/images/I/31gzOkuwu9L.jpg',
        ],
    },
]

export const personalCareProducts: IProduct[] = [
    {
        uuid: '7',
        name: 'Soap Bars (M&P)',
        category: categories[1],
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        ingredients: [
            {
                name: '',
                quantity: '',
            },
        ],
        images: [
            'https://res.cloudinary.com/openhouse-study/image/upload/v1641977611/product.png',
            'https://m.media-amazon.com/images/I/61fr8NXVjpS._SL1000_.jpg',
            'https://m.media-amazon.com/images/I/31gzOkuwu9L.jpg',
        ],
    },
    {
        uuid: '8',
        name: 'Hand rub',
        category: categories[1],
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        ingredients: [
            {
                name: '',
                quantity: '',
            },
        ],
        images: [
            'https://res.cloudinary.com/openhouse-study/image/upload/v1641977611/product.png',
            'https://m.media-amazon.com/images/I/61fr8NXVjpS._SL1000_.jpg',
            'https://m.media-amazon.com/images/I/31gzOkuwu9L.jpg',
        ],
    },
]

export const products = Object.freeze([
    ...homeCareProducts,
    ...personalCareProducts,
])
