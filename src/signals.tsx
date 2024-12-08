import { createSignal } from "solid-js";
import { createStore } from "solid-js/store";

export type ShopType = {
    readonly name: string;
    readonly cost: bigint;
    readonly reward: bigint;
    count: bigint;
};

export const [cookies, setCookies] = createSignal(0n);

export const RCSum = (shops: ShopType[]): bigint =>
    shops
        .map(s => s.reward * s.count)
        .reduce((l, r) => l + r);

export const getClicks = (auto: ShopType[]): bigint =>
    1n + RCSum(auto);

export const getCost = (store: ShopType): bigint => {
    const cost = Number(store.cost);
    const cnt = Number(store.count);
    const res = cost + cost * (cnt ** 1.2) / 10;
    return BigInt(Math.ceil(res));
};

export const [shops, setShops] = createStore<ShopType[]>([
    { name: "おばあちゃん", cost: 10n, reward: 2n, count: 0n },
    { name: "おじいちゃん", cost: 100n, reward: 10n, count: 0n },
    { name: "おねえちゃん", cost: 500n, reward: 50n, count: 0n },
    { name: "おにいちゃん", cost: 1500n, reward: 150n, count: 0n },
    { name: "おとうさん", cost: 6000n, reward: 1000n, count: 0n },
    { name: "おかあさん", cost: 36000n, reward: 10000n, count: 0n },
    { name: "いもうと", cost: 99999n, reward: 33333n, count: 0n },
    { name: "おとうと", cost: 999999n, reward: 777777n, count: 0n },
]);

export const [auto, setAuto] = createStore<ShopType[]>([
    { name: "農場", cost: 30n, reward: 2n, count: 0n },
    { name: "工場", cost: 125n, reward: 20n, count: 0n },
    { name: "企業", cost: 1000n, reward: 80n, count: 0n },
    { name: "国家", cost: 6666n, reward: 666n, count: 0n },
    { name: "地球", cost: 11111n, reward: 1234n, count: 0n },
    { name: "太陽系", cost: 40000n, reward: 6666n, count: 0n },
    { name: "銀河", cost: 666666n, reward: 123456n, count: 0n },
    { name: "宇宙", cost: 3333333n, reward: 1000000n, count: 0n }
]);