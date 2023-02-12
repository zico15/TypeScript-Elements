import Element from "../base/Element";


export default class PageElement extends Element {


    pathname: string = "";
    title: string = "";

    constructor(title: string = "") {
        super("body", 0, 0);
        this.title = title;
    }


    public init() {
        document.body = this.element;
    }
}