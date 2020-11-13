import NodeCache from "node-cache";
import { EventEmitter } from "events";

export class Cache {
  myCache = new NodeCache();
  event: any;
  locked: boolean;

  constructor() {
    this.locked = false;
    this.event = new EventEmitter();
    this.myCache.set(0, 0);
    this.myCache.set(1, 1);
  }

  private acquire() {
    return new Promise((resolve) => {
      if (!this.locked) {
        this.locked = true;
        return resolve();
      }

      const tryAcquire = () => {
        if (!this.locked) {
          this.locked = true;
          this.event.removeListener("release", tryAcquire);
          return resolve();
        }
      };
      this.event.on("release", tryAcquire);
    });
  }

  private release() {
    this.locked = false;
    setImmediate(() => this.event.emit("release"));
  }

  check(key: number): boolean {
    if (this.myCache.has(key)) {
      return true;
    } else {
      return false;
    }
  }

  get(key: number): number {
    const value = this.myCache.get(key) as number | undefined;
    if (!value && value != 0) {
      throw new Error("value not found in cache - " + value);
    }
    return value;
  }

  async set(key: number, result: number): Promise<void> {
    await this.acquire();
    try {
      await this.myCache.set(key, result);
    } finally {
      this.release();
    }
  }

  list() {
    return this.myCache.keys();
  }
}
