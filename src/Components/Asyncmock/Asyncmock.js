const products = [
    {
        id: '1',
        name: 'Berserk vol 1',
        price: '5.00',
        category: 'Mangas',
        img: 'https://images-na.ssl-images-amazon.com/images/I/91D07epNE9L.jpg',
        stock: 30,
        despcription: 'Berserk is'
    },
    {
        id: '2',
        name: 'Fullmetal Alchemist series',
        price: '8.00',
        category: 'Animes',
        img: 'https://m.media-amazon.com/images/I/81w16gSXgKL._SL1500_.jpg',
        stock: 15,
        despcription: 'Fullmetal Alchemist is'
    },
    {
        id: '3',
        name: 'Link figure',
        price: '6.00',
        category: 'Figures',
        img: 'https://m.media-amazon.com/images/I/61K4QnNo65L._AC_SL1321_.jpg',
        stock: 10,
        despcription: 'Link is'
    },
    {
        id: '4',
        name: 'One punch man vol 4',
        price: '13.00',
        category: 'Mangas',
        img: 'https://m.media-amazon.com/images/I/51g350kiXML.jpg',
        stock: 20,
        despcription: 'One punch man is'
    }
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductsById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}