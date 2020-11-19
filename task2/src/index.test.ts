import { Cart } from "./index";
import { Product } from "./Products";

describe("Cart.getAllProducts", () => {
  describe("when function is called and there is no product in cart", () => {
    it("should return an empty array", () => {
      const cart = new Cart();
      const products = cart.getAllProducts();
      expect(products).toEqual([]);
    });
  });

  describe("when function is called and there are mock products in cart", () => {
    it("should return mocked products", () => {
      const mockProducts = [new Product("item1"), new Product("item2")];
      const cart = new Cart();

      mockProducts.forEach((mockProduct) => {
        cart.addProduct(mockProduct);
      });

      const products = cart.getAllProducts();

      expect(products).toEqual(mockProducts);
    });
  });
});

describe("Cart.addProduct()", () => {
  describe("when cart is empty", () => {
    it("should return 0", () => {
      const cart = new Cart();
      expect(cart.count()).toBe(0);
    });
  });

  describe("cart is not empty", () => {
    it("should return number of items in cart", () => {
      const mockProducts = [new Product("item1"), new Product("item2")];
      const cart = new Cart();

      mockProducts.forEach((mockProduct) => {
        cart.addProduct(mockProduct);
      });

      expect(cart.count()).toBe(2);
    });
  });
});

describe("Cart.getOneProduct()", () => {
  it("should return that specific item from cart", () => {
    const mockProducts = [
      new Product("item1", "item-1-id"),
      new Product("item2", "item-2-id"),
    ];
    const cart = new Cart();

    mockProducts.forEach((mockProduct) => {
      cart.addProduct(mockProduct);
    });

    const productIndex = cart.getOneProduct("item-2-id");

    if (productIndex) {
      expect(productIndex).toEqual({ name: "item1", id: "item-1-id" });
    }
  });
});
