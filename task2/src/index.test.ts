import { Cart, Product } from "./index";

test("addProduct to cart", () => {
  let product = new Product("item1");
  let product2 = new Product("item2");
  let cart = new Cart();
  cart.add(product);
  cart.add(product2);
  expect(cart.count()).toBe(2);
});
