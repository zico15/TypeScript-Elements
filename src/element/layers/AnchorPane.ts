
import { Ref } from "../../factory/Ref";
import { Pane, Element} from "../";

export default class AnchorPane extends Element {
    
    
    public constructor() {
        super("div", 0, 0);
        this.setStyle("background-color: transparent; width: 100%; height: 100%; position: fixed; inset: 0px;");
    }

   
    public static setTopAnchor(child: Element, value: number | string | Ref<any>) {
        if (typeof value == "number")
            child.style.top = value.toString() + "px";
        else
            child.style.top = value;
    }
    
    public static setBottomAnchor(child: Element, value: number | string | Ref<any>) {
        if (typeof value == "number")
            child.style.bottom = value.toString() + "px";
        else
            child.style.bottom = value;
    }

    public static setLeftAnchor(child: Element, value: number | string | Ref<any>) {
        if (typeof value == "number")
            child.style.left = value.toString() + "px";
        else
            child.style.left = value;
    }
    public static setRightAnchor(child: Element, value: number | string | Ref<any>) {
        if (typeof value == "number")
            child.style.right = value.toString() + "px";
        else
            child.style.right = value;
    }

}