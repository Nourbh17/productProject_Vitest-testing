import { Product } from "../src/product";
import * as functions from "../src/productFunctions";
import { test, expect } from "vitest";

test("Main functionality test", () => {
  const productList = [];
  functions.addProduct(
    productList,
    new Product("1", "Product 1", "Description 1", 10, 5)
  );
  functions.addProduct(
    productList,
    new Product("2", "Product 2", "Description 2", 15, 3)
  );
  expect(productList.length).toBe(2);

  const products = functions.showProducts(productList);
  expect(products.length).toBe(2);

  const productById = functions.showProductById(productList, "2");
  expect(productById.id).toBe("2");
  expect(productById.name).toBe("Product 2");

  const updatedDetails = { name: "New Name", price: 25 };
  functions.updateProductDetails(productList, "2", updatedDetails);
  const updatedProduct = functions.showProductById(productList, "2");
  expect(updatedProduct.name).toBe("New Name");
  expect(updatedProduct.price).toBe(25);


  functions.removeProduct(productList, "1");
  expect(productList.length).toBe(1);
});
