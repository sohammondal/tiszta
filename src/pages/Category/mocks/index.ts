import { uniqueId } from 'lodash'

import { ICategory, IProduct } from '../types'

export const categories: ICategory[] = [
    {
        uuid: uniqueId(),
        name: 'All Products',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        image: '',
    },
    {
        uuid: uniqueId(),
        name: 'Home care',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        image: '',
    },
    {
        uuid: uniqueId(),
        name: 'Personal care',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        image: '',
    },
]

export const homeCareProducts: IProduct[] = [
    {
        uuid: uniqueId(),
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
        uuid: uniqueId(),
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
        uuid: uniqueId(),
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
        uuid: uniqueId(),
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
        uuid: uniqueId(),
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
        uuid: uniqueId(),
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
        uuid: uniqueId(),
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
        uuid: uniqueId(),
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

export const products = [...homeCareProducts, ...personalCareProducts]
