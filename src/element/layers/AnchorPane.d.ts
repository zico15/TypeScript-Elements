import { Ref } from "../../factory/Ref";
import { Element } from "../";
export default class AnchorPane extends Element {
    constructor();
    static setTopAnchor(child: Element, value: number | string | Ref<any>): void;
    static setBottomAnchor(child: Element, value: number | string | Ref<any>): void;
    static setLeftAnchor(child: Element, value: number | string | Ref<any>): void;
    static setRightAnchor(child: Element, value: number | string | Ref<any>): void;
    static setCenterAnchor(child: Element, value: number | string | Ref<any>): void;
    static setCenterXAnchor(child: Element, value: number | string | Ref<any>): void;
    static setCenterYAnchor(child: Element, value: number | string | Ref<any>): void;
    static setAnchor(child: Element, top: number | string | Ref<any>, right: number | string | Ref<any>, bottom: number | string | Ref<any>, left: number | string | Ref<any>): void;
}
