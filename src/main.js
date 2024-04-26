const { Product } = require("../src/product.js");
const { addProduct, removeProduct, showProducts, showProductById, updateProductDetails } = require("./productFunctions.js");

const productList = [];


const newProduct1 = new Product("1", "Product 1", "Description 1", 10, 5);
addProduct(productList, newProduct1);

const newProduct2 = new Product("2", "Product 2", "Description 2", 10, 5);
addProduct(productList, newProduct2);


removeProduct(productList, "1");


const products = showProducts(productList);
console.log(products);


const productById = showProductById(productList, "2");
console.log(productById);


const updatedDetails = { name: "New Name", price: 20 };
updateProductDetails(productList, "2", updatedDetails);
console.log(productList);
