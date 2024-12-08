import { createContext, createSignal } from "solid-js";
import { createStore, Store } from "solid-js/store";

export const [cookies, setCookies] = createSignal(0n);

export type StoreType = {
    readonly name: string;
    readonly cost: bigint;
    readonly reward: bigint;
    readonly cps?: bigint;
    count: bigint;
};

export const getClicks = (shops: StoreType[]): bigint =>
    1n + shops
        .map(n => n.reward * n.count)
        .reduce((l, r) => l + r);

export const getAllCps = (shops: StoreType[]): bigint =>
    shops
        .map(s => (s.cps ?? 0n) * s.count)
        .reduce((l, r) => l + r);

export const [shops, setShops] = createStore<StoreType[]>([
    { name: "おばあちゃん", cost: 10n, reward: 2n, count: 0n },
    { name: "おじいちゃん2", cost: 100n, reward: 10n, count: 0n },
    { name: "工場", cost: 300n, reward: 20n, cps: 10n, count: 0n },
    { name: "おねえちゃん", cost: 500n, reward: 50n, count: 0n },
    { name: "おにいちゃん", cost: 1500n, reward: 150n, count: 0n },
    { name: "地球", cost: 300000n, reward: 20000n, cps: 8888n, count: 0n },
]);