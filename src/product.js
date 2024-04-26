class Product {
    constructor(id, name, description, price, quantity) {
        if (!id || !name || !description || !price || !quantity) {
            throw new Error("ID, name, description, price, and quantity are required.");
        }
        if (price <= 0 || quantity <= 0) {
            throw new Error("Price and quantity must be positive values.");
        }
        
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
    }
}

module.exports = { Product };
