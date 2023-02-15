import ElementRef  from "../base/ElementRef";



export default class InputElement extends ElementRef<any> {
    constructor(placeholder: string, type: string = "text") {
        super("", "input");
        this.element.setAttribute("type", type);
        this.element.setAttribute("placeholder", placeholder);
        (this.element as HTMLInputElement).oninput = (e) => {
            const v = (e.target as HTMLInputElement).value;
            this.__value.value = v;
            this.emit();
        }
    }

}