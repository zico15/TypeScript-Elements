import Element from "../base/Element";

export default class LabelElement extends Element {

    constructor(...values: any[]) {
        super("label");
        this.innerHTML(...values);
    }
}