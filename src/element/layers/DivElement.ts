import Element from "../base/Element";

export default class DivElement extends Element {
    constructor( x: number | string = "0px", y: number | string = "0px") {
        super("div", x, y);
    }
}