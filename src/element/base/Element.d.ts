import CSSStyle from "./CSSStyle";
export default class Element {
    private node;
    private children;
    private _style;
    private _x;
    private _y;
    name: string;
    constructor(type: string | null, x?: number | string, y?: number | string);
    protected createElement(type: string, inHtml: string): Promise<void>;
    appendChild(...childs: Element[]): void;
    removeChild(...childs: Element[]): void;
    getChildren(): Array<Element>;
    setAttribute(name: string, value: string): void;
    /**
     * use addLink instead
     *  stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
     * ** */
    addLink(rel: string, link: string): void;
    addStyleLink(link: string): void;
    addScriptLink(link: string): void;
    getAttribute(name: string): string | null;
    setStyle(style: string): void;
    addStyle(style: string): void;
    removeStyle(style: string): void;
    innerHTML(...values: any[]): string;
    addEventListener(event: keyof HTMLElementEventMap, callback: (this: GlobalEventHandlers, ev: Event) => any, options?: boolean | AddEventListenerOptions): void;
    removeEventListener(event: keyof HTMLElementEventMap, callback: (this: GlobalEventHandlers, ev: Event) => any, options?: boolean | AddEventListenerOptions): void;
    set className(value: string);
    get className(): string;
    get style(): CSSStyle;
    protected get element(): HTMLElement;
    protected set element(v: HTMLElement);
    get id(): string;
    set id(v: string);
    get x(): number;
    set x(v: number | string);
    get y(): number;
    set y(v: number | string);
    setOnClick(a: (this: GlobalEventHandlers, ev: MouseEvent) => any): void;
    setOnMouseOver(a: (this: GlobalEventHandlers, ev: MouseEvent) => any): void;
    setOnMouseOut(a: (this: GlobalEventHandlers, ev: MouseEvent) => any): void;
    setOnMouseDown(a: (this: GlobalEventHandlers, ev: MouseEvent) => any): void;
    setOnMouseUp(a: (this: GlobalEventHandlers, ev: MouseEvent) => any): void;
    setOnMouseEnter(a: (this: GlobalEventHandlers, ev: MouseEvent) => any): void;
}
