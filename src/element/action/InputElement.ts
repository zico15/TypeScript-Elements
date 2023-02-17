import Element from "../base/Element";
import { ref, Ref } from "../../factory/Ref";



export default class InputElement extends Element {

    private __value

    constructor(placeholder: string, type: string = "text", value: any = "") {
        super("input");
        this.__value = ref(value);
        this.element.setAttribute("type", type);
        this.element.setAttribute("placeholder", placeholder);
        (this.element as HTMLInputElement).oninput = (e) => {
            const v = (e.target as HTMLInputElement).value;
            this.__value.value = v;
            this.__value.emit();
        }
    }

    public get value(): Ref<any> {
        return this.__value;
    }
}