
import Element from "../base/Element";

export default class ButtonElement extends Element {
    constructor(text:string, x: number | string = "0px", y: number | string = "0px") {
        super("button", x, y);
        this.element.innerHTML = text;
    }
}