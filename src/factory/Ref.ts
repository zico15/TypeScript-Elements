

type callback<T> = (value: T) => void

export class Ref<T> {

    private calllbacks: callback<T>[] = [];


    public static ref<T>(value: T): Ref<T> {
        return new Ref<T>(value);
    }

    private _value: T;
    private _value_origen: T;

    public constructor(value: T) {
        this._value = value;
        this._value_origen = value;
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

}

export function ref<T>(value: T): Ref<T> {
    return new Ref<T>(value);
}
