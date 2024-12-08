import { Route } from "@solidjs/router";
import { lazy } from 'solid-js';

type RouteChildType = Parameters<typeof lazy>[0];

const createRoutes = <K extends string>(
    routes: Record<K, RouteChildType>
) => routes;

export const routes = createRoutes({
    "/": () => import("./pages/top"),
    "/cookie": () => import("./pages/cookieclicker"),
});

export type RouteNames = keyof typeof routes;