import Element from "../base/Element";


export default  class PageElement extends Element {

    page: any;

    constructor(page: (body: PageElement) => void) {
        super("body", 0, 0);
        this.page = page;
    }


    public init() {
        document.body = this.element;
        this.page(this);
    }
}