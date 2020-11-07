import { v4 as uuidv4 } from "uuid";

export interface ICart {
  add(product: Product): void;
  get(id: string): Product | undefined;
  getAll(): Product[];
  update(id: string, product: Product): void;
  remove(id: string): void;
  removeAll(): void;
  count(): number;
}

export class Cart implements ICart {
  private _productMap: Map<string, Product> = new Map();

  public add(product: Product): void {
    this._productMap.set(product.id, product);
  }

  public update(id: string, product: Product): void {
    this._productMap.set(id, product);
  }

  public get(id: string): Product | undefined {
    return this._productMap.get(id);
  }

  public getAll(): Product[] {
    return Array.from(this._productMap.values());
  }

  public remove(id: string): void {
    this._productMap.delete(id);
  }

  public count(): number {
    return this._productMap.size;
  }

  public removeAll(): void {
    this._productMap.clear();
  }
}

export class Product {
  private _name: string;
  private _id: string;

  constructor(name: string) {
    this._name = name;
    this._id = uuidv4();
  }

  public get name(): string {
    return this._name;
  }

  public get id(): string {
    return this._id;
  }
}

// let item1 = new Product("item1");
// let item2 = new Product("item2");

// let cart = new Cart();

// cart.add(item1);
// cart.add(item2);

// console.log(cart);
