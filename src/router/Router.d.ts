import { PageElement } from "../element";
declare class Router {
    private routes;
    constructor();
    private loadPage;
    put(pathname: string, route: PageElement): void;
    getPate(pathname: string): PageElement | undefined | null;
    remove(route: PageElement): void;
    load(pathname: string | PageElement): void;
    setPage(pathname: string): void;
    private pageNotFound;
}
export declare const router: Router;
export {};
