import Element from "../base/Element";
export default class PageElement extends Element {
    pathname: string;
    title: string;
    constructor(title?: string);
    init(): void;
}
export declare function styleLink(url: string): <T extends new (...args: any[]) => {}>(constructor: T) => {
    new (...args: any[]): {};
} & T;
