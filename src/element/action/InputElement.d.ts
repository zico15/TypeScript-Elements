import Element from "../base/Element";
import { Ref } from "../../factory/Ref";
export default class InputElement extends Element {
    private __value;
    constructor(placeholder: string, type?: string, value?: any);
    get value(): Ref<any>;
}
