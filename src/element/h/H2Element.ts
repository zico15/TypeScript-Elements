import Element from "../base/Element";

export default class H2Element extends Element {
    constructor(txt: string = "", x: number | string = "0px", y: number | string = "0px") {
        super("h2", x, y);
        this.element.innerHTML = txt;
    }
}