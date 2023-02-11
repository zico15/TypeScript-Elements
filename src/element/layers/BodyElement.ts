
import Element from "../base/Element";

export default class BodyElement extends Element {
    constructor( x: number | string = "0px", y: number | string = "0px") {
        super("body", x, y);
        document.body = this.element;
    }
}