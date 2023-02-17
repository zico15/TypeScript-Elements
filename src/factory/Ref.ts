

type callback<T> = (value: T) => void

export interface Ref<T> {

    get value(): T;
    set value(v: T);
    get ref(): Ref<any>;
    valueOf(): T;
    on(callback: (value: T) => void) : void;
    emit(): void;
    reset(): void;
    toString(): string;
}

export class Reference<T> implements Ref<T>{

    private calllbacks: callback<T>[] = [];
    private static _id = 100000;
    private static refs = new Map<string, Reference<any>>();


    public static ref<T>(value: T): Reference<T> {
        return new Reference<T>(value);
    }

    private _value: T;
    private _value_origen: T;

    public constructor(value: T) {
        this._value = value;
        this._value_origen = value;
        Reference._id++;
    }

    valueOf(): T {
        return this._value;
    }

    get ref(): Ref<any> {
        return this;
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
        return `{Ref{${Reference._id}}Ref}`;
    }

    public static getRef(id: string) {
        return Reference.refs.get(id);
    }

}


export function ref<T>(value: T): Reference<T> {
    return new Reference<T>(value);
}
