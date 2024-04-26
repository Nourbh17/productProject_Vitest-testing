function addProduct(productList, product) {
    productList.push(product);
}

function removeProduct(productList, productId) {
    const index = productList.findIndex(product => product.id === productId);
    if (index !== -1) {
        productList.splice(index, 1);
    } else {
        throw new Error("Product not found in the list.");
    }
}

function showProducts(productList) {
    return productList;
}

function showProductById(productList, productId) {
    return productList.find(product => product.id === productId);
}

function updateProductDetails(productList, productId, updatedDetails) {
    const productToUpdate = productList.find(product => product.id === productId);
    if (productToUpdate) {
        Object.assign(productToUpdate, updatedDetails);
    } else {
        throw new Error("Product not found in the list.");
    }
}

module.exports = { addProduct, removeProduct, showProducts, showProductById, updateProductDetails };
