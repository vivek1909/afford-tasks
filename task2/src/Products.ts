import { v4 as uuid } from "uuid";

export class Product {
  id: string;
  name: string;

  constructor(name: string, id: string = uuid()) {
    this.id = id;
    this.name = name;
  }
}
