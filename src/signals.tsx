import { createContext, createSignal } from "solid-js";
import { createStore, Store } from "solid-js/store";

export const [cookies, setCookies] = createSignal(0n);

export type StoreType = {
    readonly name: string;
    readonly cost: bigint;
    readonly reward: bigint;
    count: bigint;
};

export const RCSum = (shops: StoreType[]): bigint =>
    shops
        .map(s => s.reward * s.count)
        .reduce((l, r) => l + r);

export const getClicks = (auto: StoreType[]): bigint =>
    1n + RCSum(auto);

export const getCost = (store: StoreType): bigint => {
    const cost = Number(store.cost);
    const cnt = Number(store.count);
    const res = cost + cost * cnt / 10;
    return BigInt(Math.ceil(res));
};

export const [shops, setShops] = createStore<StoreType[]>([
    { name: "おばあちゃん", cost: 10n, reward: 2n, count: 0n },
    { name: "おじいちゃん", cost: 100n, reward: 10n, count: 0n },
    { name: "おねえちゃん", cost: 500n, reward: 50n, count: 0n },
    { name: "おにいちゃん", cost: 1500n, reward: 150n, count: 0n },
]);

export const [auto, setAuto] = createStore<StoreType[]>([
    { name: "工場", cost: 300n, reward: 20n, count: 0n },
    { name: "地球", cost: 300000n, reward: 20000n, count: 0n },
    { name: "太陽系", cost: 30000000n, reward: 2000000n, count: 0n },
    { name: "銀河", cost: 3000000000n, reward: 200000000n, count: 0n },
    { name: "宇宙", cost: 300000000000n, reward: 20000000000n, count: 0n }
]);