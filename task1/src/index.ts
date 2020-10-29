export function fibonacci(n: number): number {
    let memo: any = {};
    function helper(x: number): number {
        if(x <= 1) return x;
        if(memo[x]) return memo[x];

        return memo[x] = helper(x-1) + helper(x-2);
    }
    return helper(n);
}