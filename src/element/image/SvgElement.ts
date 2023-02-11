import { Element } from "../";

export default class SvgElement extends Element {

    constructor(src: string) {
        super("svg", "0px", "0px");
        this.load(src);
    }

    public async load(src: string) {
        await fetch(src).then((response) => {
            return response.text();
        }).then((data) => this.createElement("svg", data)).catch((err) => this.element = document.createElement("svg"));
    }
}

