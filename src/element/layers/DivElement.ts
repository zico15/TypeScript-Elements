import Element from "../base/Element";

export default class DivElement extends Element {
    constructor(className?: string,  x?: number | string, y?: number | string) {
        super("div", x, y);
        if (className) {
            this.element.className = className;
        }
    }
}