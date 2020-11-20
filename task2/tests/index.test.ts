import { Cart } from "../src/index";
import { Product } from "../src/Products";

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

  describe("when name is empty", () => {
    it("should throw an error with message 'please enter name of the product'", () => {
      const cart = new Cart();
      try {
        cart.addProduct({ name: "", id: "item-1-id" });
      } catch (error) {
        expect(error.message).toBe("please enter name of the product");
      }
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

    const productIndex = cart.getOneProduct("item-1-id");

    if (productIndex) {
      expect(productIndex).toEqual({ name: "item1", id: "item-1-id" });
    }
  });
});

describe("Cart.updateProduct()", () => {
  it("should update the name of that product", () => {
    const mockProducts = [
      new Product("item1", "item-1-id"),
      new Product("item2", "item-2-id"),
    ];
    const cart = new Cart();

    mockProducts.forEach((mockProduct) => {
      cart.addProduct(mockProduct);
    });

    cart.updateProduct("item-1-id", "item1-updated");

    expect(cart.getOneProduct("item-1-id")?.name).toBe("item1-updated");
  });
});

describe("Cart.removeAllProducts", () => {
  it("should remove all the products from cart", () => {
    const mockProducts = [new Product("item1"), new Product("item2")];
    const cart = new Cart();

    mockProducts.forEach((mockProduct) => {
      cart.addProduct(mockProduct);
    });

    cart.removeAllProducts();

    expect(cart.count()).toBe(0);
  });
});

describe("Cart.removeProduct", () => {
  it("should remove that specific product", () => {
    const mockProducts = [
      new Product("item1", "item-1-id"),
      new Product("item2", "item-2-id"),
    ];
    const cart = new Cart();

    mockProducts.forEach((mockProduct) => {
      cart.addProduct(mockProduct);
    });

    try {
      cart.removeProduct("item-1-id");
      expect(cart.count()).toBe(1);
    } catch (error) {
      expect(error.message).toBe("product not found");
    }
  });
});
