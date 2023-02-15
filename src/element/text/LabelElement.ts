
import { Ref , refType} from "../../factory/Ref";
import Element from "../base/Element";

export default class LabelElement extends Element {

    constructor(txt: string | Ref<any> | refType, x: number | string = "0px", y: number | string = "0px") {
        super("label", x, y);
        if (txt instanceof Ref ||  typeof txt == "string")
            this.innerHTML(txt);
        else
            this.innerHTML((txt as refType).ref);
    }
}