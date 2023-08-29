


const productsArray = [
    {
        id: "price_1NjzAFHHfk1ycPcQR3lO6MxU",
        title: "coffed",
        price: 4.99,
        // image: './images/coffe.png',
    },
    {
        id: "price_1NjzDIHHfk1ycPcQo2OA9T9m",
        title: "redbul",
        price: 5.99,
        // image: './images/redbull.png',
    },
    {
        id: "price_1NjzBsHHfk1ycPcQ088I21KK",
        title: "vodk",
        price: 39.99,
        // image: './images/vodka.png',
    },
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id)

    if (productData == undefined) {
        console.log("product doesn't exist for id: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };