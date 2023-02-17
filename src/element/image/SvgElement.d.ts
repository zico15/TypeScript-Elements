import { Element } from "../";
export default class SvgElement extends Element {
    constructor(src: string);
    load(src: string): Promise<void>;
}
