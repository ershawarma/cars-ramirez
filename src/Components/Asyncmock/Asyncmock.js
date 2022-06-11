const products = [
    {
        id: '1',
        name: 'man shirt black',
        prince: 5.00,
        category: 'man',
        img: 'http://sc04.alicdn.com/kf/H2e11e1bdb21345548e7215ef463235a7B.jpg',
        stock: 30,
        despcription: 'Black shirt for men'
    },
    {
        id: '2',
        name: 'woman sweater beige',
        prince: 8.00,
        category: 'man',
        img: 'https://i.pinimg.com/564x/b4/06/6b/b4066bfead02b763975c5cdeff5d008a.jpg',
        stock: 15,
        despcription: 'Beige sweater for women'
    },
    {
        id: '3',
        name: 'kid cap rainbow',
        prince: 6.00,
        category: 'kid',
        img: 'https://m.media-amazon.com/images/I/61bX11zRkbL._AC_UX425_.jpg',
        stock: 10,
        despcription: 'Rainbow cap for kids'
    },
    {
        id: '4',
        name: 'pet shirt white',
        prince: 13.00,
        category: 'pet',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREzNUc3V-9MgzEo36TN5BM1WrOh7PXi69evw&usqp=CAU',
        stock: 20,
        despcription: 'White shirt for pets'
    }
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}