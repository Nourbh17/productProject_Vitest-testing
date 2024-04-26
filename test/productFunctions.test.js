import * as functions from "../src/productFunctions";
import { Product } from "../src/product";
import { test, expect } from "vitest";

test("Test adding a product to a list", () => {
  const productList = [];
  const newProduct = new Product("1", "Product 1", "Description 1", 10, 5);
  functions.addProduct(productList, newProduct);
  expect(productList).toContain(newProduct);
});

test("Test removing a product from a list", () => {
  const productList = [
    new Product("1", "Product 1", "Description 1", 10, 5),
    new Product("2", "Product 2", "Description 2", 15, 3),
    new Product("3", "Product 3", "Description 3", 20, 2),
  ];
  functions.removeProduct(productList, "2");
  expect(productList.length).toBe(2);
  expect(productList.map(product => product.id)).not.toContain("2");
});

test("Test showing products", () => {
  const productList = [
    new Product("1", "Product 1", "Description 1", 10, 5),
    new Product("2", "Product 2", "Description 2", 15, 3),
    new Product("3", "Product 3", "Description 3", 20, 2),
  ];
  const products = functions.showProducts(productList);
  expect(products.length).toBe(3);
  expect(products).toEqual(productList);
});

test("Test showing product by ID", () => {
  const productList = [
    new Product("1", "Product 1", "Description 1", 10, 5),
    new Product("2", "Product 2", "Description 2", 15, 3),
    new Product("3", "Product 3", "Description 3", 20, 2),
  ];
  const productById = functions.showProductById(productList, "2");
  expect(productById.id).toBe("2");
  expect(productById.name).toBe("Product 2");
});

test("Test updating product details", () => {
  const productList = [
    new Product("1", "Product 1", "Description 1", 10, 5),
    new Product("2", "Product 2", "Description 2", 15, 3),
    new Product("3", "Product 3", "Description 3", 20, 2),
  ];
  const updatedDetails = { name: "New Name", price: 25 };
  functions.updateProductDetails(productList, "2", updatedDetails);
  const updatedProduct = functions.showProductById(productList, "2");
  expect(updatedProduct.name).toBe("New Name");
  expect(updatedProduct.price).toBe(25);
});
