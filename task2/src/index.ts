import { v4 as uuid } from "uuid";
import { Product } from "./Products";

export class Cart {
  public readonly id: string;
  private readonly products: Product[] = [];

  constructor(id: string = uuid()) {
    this.id = id;
  }

  public getAllProducts = (): Product[] => {
    return this.products;
  };

  public getOneProduct = (id: string): Product | undefined => {
    const productIndex = this.products.find(
      (product: Product) => product.id === id
    );

    if (productIndex) {
      return productIndex;
    }

    throw new Error("product not found");
  };

  public addProduct = (product: Product): string => {
    if (product.name.length) {
      this.products.push(product);
      return product.id;
    } else {
      throw new Error("please enter name of the product");
    }
  };

  public updateProduct = (id: string, name: string) => {
    const productIndex = this.products.find(
      (product: Product) => product.id === id
    );

    if (productIndex) {
      productIndex.name = name;
      return;
    }

    throw new Error("product cannot be updated");
  };

  public removeProduct = (id: string): void => {
    const productIndex = this.products.findIndex(
      (product: Product) => product.id === id
    );

    if (productIndex) {
      this.products.splice(productIndex, 1);
      return;
    }

    throw new Error("product not found");
  };

  public removeAllProducts = (): void => {
    if (!this.products.length) {
      throw new Error("cart already empty");
    }
    this.products.splice(0, this.products.length);
  };

  public count = (): number => {
    return this.products.length;
  };
}

// let list = new Product("item1");

// let cart = new Cart();

// console.log(cart.addProduct(list));
// cart.getOneProduct("b97205cb-68ab-42be-a83b-69305e05a58b");
