
import { Pane, Element} from "../";

export default class AnchorPane extends Element {
    
    
    public constructor() {
        super("div", 0, 0);
        this.setStyle("background-color: transparent; width: 100%; height: 100%; position: fixed; inset: 0px;");
    }

   
    public static setTopAnchor(child: Element, value: number | string) {
        if (typeof value == "string" )
            child.element.style.top = value;
        else
            child.element.style.top = value.toString() + "px";
    }

    public static setBottomAnchor(child: Element, value: number | string) {
        if (typeof value == "string" )
            child.element.style.bottom = value;
        else
            child.element.style.bottom = value.toString() + "px";
    }

    public static setLeftAnchor(child: Element, value: number | string) {
        if (typeof value == "string" )
            child.element.style.left = value;
        else
            child.element.style.left = value.toString() + "px";
    }

    public static setRightAnchor(child: Element, value: number | string) {
        if (typeof value == "string" )
            child.element.style.right = value;
        else
            child.element.style.right = value.toString() + "px";
    }

}