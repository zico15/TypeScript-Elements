
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

    public static setCenterAnchor(child: Element, value: number | string | Ref<any>) {
        if (typeof value == "number")
            child.style.margin = "auto";
        else
            child.style.margin = "auto";
    }

    public static setCenterXAnchor(child: Element, value: number | string | Ref<any>) {
        if (typeof value == "number")
            child.style.marginLeft = "auto";
        else
            child.style.marginLeft = "auto";
    }

    public static setCenterYAnchor(child: Element, value: number | string | Ref<any>) {
        if (typeof value == "number")
            child.style.marginTop = "auto";
        else
            child.style.marginTop = "auto";
    }

    public static setAnchor(child: Element, top: number | string | Ref<any>, right: number | string | Ref<any>, bottom: number | string | Ref<any>, left: number | string | Ref<any>) {
        AnchorPane.setTopAnchor(child, top);
        AnchorPane.setRightAnchor(child, right);
        AnchorPane.setBottomAnchor(child, bottom);
        AnchorPane.setLeftAnchor(child, left);
    }


}