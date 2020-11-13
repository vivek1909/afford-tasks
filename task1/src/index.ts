import { Cache } from "./cache";
import { RedisCache } from "./redis_cache";

let cache = new Cache();
let redisCache = new RedisCache();

export async function DPFibonacci(n: number): Promise<number | string> {
  if (n < 0) {
    return "invalid input";
  } else if (await cache.check(n)) {
    return await redisCache.get(n);
  } else {
    const length = await (await redisCache.list()).length;
    let result = 0;

    for (let i = length; i <= n; i++) {
      result = (await redisCache.get(i - 1)) + (await redisCache.get(i - 2));
      await redisCache.set(i, result);
    }

    return result;
  }
}
