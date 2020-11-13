import { Tedis } from "tedis";

export class RedisCache {
  locked: boolean;
  client: any;

  constructor() {
    this.client = new Tedis({
      port: 6379,
      host: "127.0.0.1",
    });
    this.client.on("connect", () => {
      console.log("connected");
    });
    this.client.on("close", () => {
      console.log("closed");
    });
    this.client.set("0", "0");
    this.client.set("1", "1");
  }

  async check(key: number): Promise<number> {
    const value = await this.client.exists(String(key));
    return value;
  }

  async get(key: number): Promise<number> {
    const value = (await this.client.get(String(key))) as
      | number
      | undefined
      | null;
    if (!value || value == null) {
      throw new Error("value not found in cache - " + value);
    }
    return Number(value);
  }

  async set(key: number, result: number): Promise<void> {
    console.log("set invoked");
    try {
      console.log("setting values");
      await this.client.set(String(key), String(result));
    } catch (e) {
      console.log(e);
    }
  }

  async list() {
    return await this.client.keys("*");
  }
}
