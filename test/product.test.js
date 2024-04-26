import { Product } from "../src/product";
import { test, expect } from "vitest";

test("Test Product constructor", () => {
  const correctProduct = new Product(
    "1",
    "Product 1",
    "Description 1",
    10,
    5
  );
  expect(correctProduct.id).toBe("1");
  expect(correctProduct.name).toBe("Product 1");
  expect(correctProduct.description).toBe("Description 1");
  expect(correctProduct.price).toBe(10);
  expect(correctProduct.quantity).toBe(5);

 
  const productMissingArgs = () => new Product("1", "Product 1");
  expect(productMissingArgs).toThrowError(
    new Error("ID, name, description, price, and quantity are required.")
  );

 
  const emptyProduct = () => new Product();
  expect(emptyProduct).toThrowError(
    new Error("ID, name, description, price, and quantity are required.")
  );
});
