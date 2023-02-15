

import { ref, Ref , refType} from "../../factory/Ref";
import Element from "../base/Element";



export default class InputElement extends Element implements refType{


    private __value: Ref<any>;

    constructor(placeholder: string, type: string = "text") {
        super("input");
        this.__value = ref("");
        this.element.setAttribute("type", type);
        this.element.setAttribute("placeholder", placeholder);
        (this.element as HTMLInputElement).value = this.__value.value;
        (this.element as HTMLInputElement).oninput = (e) => {
            const v = (e.target as HTMLInputElement).value;
            this.__value.value = v;
            this.__value.emit();
        }
    }
    

    get ref(): Ref<any> {
        return this.__value;
    }

    set ref(value: Ref<any>) {
        this.__value = value;
    }

    get value(): any {
        return this.__value.value;
    }

    set value(value: any) {
        this.__value.value = value;
        this.__value.emit();
    }

}