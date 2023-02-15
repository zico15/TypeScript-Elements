import { Ref, Reference } from "../../factory/Ref";
import Element from "./Element";

export default class ElementRef<T> extends Element {

    protected __value: Ref<any>;

    constructor(typeRef: T, type: string | null) {
        super(type);
        this.__value = new Reference<T>(typeRef);
    }

    valueOf() {
        return this.__value.value;
    }
    on(callback: (value: any) => void): void {
        this.__value.on(callback);
    }

    emit(): void {
        this.__value.emit();
    }
    reset(): void {
        this.__value.reset();
    }

    toString(): string {
        return this.__value.toString();
    }
    

    get ref(): Ref<any> {
        return this.__value;
    }

    get value(): any {
        return this.__value.value;
    }

    set value(value: any) {
        this.__value.value = value;
        this.__value.emit();
    }

}
