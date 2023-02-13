import { Ref } from "../../factory/Ref";
import  CSSStyle from "./CSSStyle"

export default class Element {

    private node: any = null;
    private children: Array<Element> = [];
    private _style:CSSStyle | null = null;
    private _x: number = 0;
    private _y: number = 0;
    public name: string = "";

    constructor(type: string | null, x: number | string = "0px", y: number | string = "0px") {
        if (type != null) {
            this.node = document.createElement(type);
            this.element.style.position = "absolute";
            this.x = x
            this.y = y
            this._style = new CSSStyle(this.element.style);
        }
    }

    protected async createElement(type: string, inHtml: string, x: number | string = "0px", y: number | string = "0px") {
        const template = document.createElement('div');
        const parant = this.element.parentElement;
        if (parant != null)
            parant.removeChild(this.element);
        template.innerHTML = inHtml;
        let svg = template.querySelector(type) as HTMLElement;
        let style = this.node?.getAttribute("style") || String("");
        svg.setAttribute("style", style);
        this.node = svg
        template.children[0].remove();
        if (parant != null)
            parant.appendChild(this.element);
        this._style = new CSSStyle(this.element.style);
    }

    appendChild(...childs: Element[]) {
        childs.forEach((child) => {
            if (child != this) {
                this.children.push(child);
                this.element.appendChild(child.element);
            }
        })
    }

    removeChild(...childs: Element[]) {
        childs.forEach((child) => {
            this.children = this.children.filter((c) => c !== child);
            this.element.removeChild(child.element);
        })
    }

    getChildren(): Array<Element> {
        return this.children;
    }

    

    setStyle(style: string) {
        this.element.setAttribute("style", style);
        this.element.style.top = (this._x.toString() + "px");
        this.element.style.left = (this._y.toString() + "px");
    }

    addStyle(style: string) {
        this.element.setAttribute("style", this.element.getAttribute("style") + style);
    }

    removeStyle(style: string) {
        this.element.setAttribute("style", String(this.element.getAttribute("style")).replace(style, ""));
    }

    public innerHTML(...values: any[]): string {
        if (values.length > 0) {
            let text = ""
            values.forEach((value) => {
                if (value instanceof Ref) {
                    value.on(() => {
                        this.element.innerHTML = values.map((v) => v instanceof Ref ? v.value : v).join("");
                    } )
                    text += value.value;
                }
                else
                    text += value;
            })
            this.element.innerHTML = text;
        }
        return this.element.innerHTML;
    }

    public addEventListener(event: keyof HTMLElementEventMap, callback: (this: GlobalEventHandlers, ev: Event) => any, options?: boolean | AddEventListenerOptions): void {
        this.element.addEventListener(event, callback, options);
    }
  
    public get style(): CSSStyle {
        return this._style!;
    }

    protected get element(): HTMLElement {
        return this.node;
    }

    protected set element(v: HTMLElement) {
        this.node = v;
    }

    public get x(): number {
        return this._x;
    }

    public set x(v: number | string) {
        if (v == typeof (Number)) {
            this._x = Number(v);
            this.node.style.left = (this._x.toString() + "px");
        }
        else {
            this._x = parseInt(v.toString());
            this.node.style.left = v;
        }
    }

    public get y(): number {
        return this._y;
    }

    public set y(v: number | string) {
        if (v == typeof (Number)) {
            this._y = Number(v);
            this.node.style.top = (this._y.toString() + "px");
        }
        else {
            this._y = parseInt(v.toString());
            this.node.style.top = v;
        }
    }


    setOnClick(a: (this: GlobalEventHandlers, ev: MouseEvent) => any) {
        this.element.onclick = a;
    }

    setOnMouseOver(a: (this: GlobalEventHandlers, ev: MouseEvent) => any) {
        this.element.onmouseover = a;
    }

    setOnMouseOut(a: (this: GlobalEventHandlers, ev: MouseEvent) => any) {
        this.element.onmouseout = a;
    }

    setOnMouseDown(a: (this: GlobalEventHandlers, ev: MouseEvent) => any) {
        this.element.onmousedown = a;
    }

    setOnMouseUp(a: (this: GlobalEventHandlers, ev: MouseEvent) => any) {
        this.element.onmouseup = a;
    }

    setOnMouseEnter(a: (this: GlobalEventHandlers, ev: MouseEvent) => any) {
        this.element.onmouseenter = a;
    }
}


