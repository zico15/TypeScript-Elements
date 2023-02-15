

type callback<T> = (value: T) => void

export class Ref<T> {

    private calllbacks: callback<T>[] = [];
    private static _id = 100000;
    private static refs = new Map<string, Ref<any>>();


    public static ref<T>(value: T): Ref<T> {
        return new Ref<T>(value);
    }

    private _value: T;
    private _value_origen: T;

    public constructor(value: T) {
        this._value = value;
        this._value_origen = value;
        Ref._id++;
    }


    public get value(): T {
        return this._value;
    }

    public set value(v: T) {
        this._value = v;
        this.emit();
    }

    public on(callback: (value: T) => void) {
        this.calllbacks.push(callback);
    }

    public emit() {
        this.calllbacks.forEach(callback => callback(typeof this._value == "function" ? this._value() : this._value));
    }

    public reset() {
        this._value = this._value_origen;
        this.emit();
    }

    public toString = () : string => {
        return `{Ref{${Ref._id}}Ref}`;
    }

    public static getRef(id: string) {
        return Ref.refs.get(id);
    }

}

export interface refType {
    get ref(): Ref<any>;
    set ref(value: Ref<any>);
}

export function ref<T>(value: T): Ref<T> {
    return new Ref<T>(value);
}
