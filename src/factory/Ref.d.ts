export interface Ref<T> {
    get value(): T;
    set value(v: T);
    get ref(): Ref<any>;
    valueOf(): T;
    on(callback: (value: T) => void): void;
    emit(): void;
    reset(): void;
    toString(): string;
}
export declare class Reference<T> implements Ref<T> {
    private calllbacks;
    private static _id;
    private static refs;
    static ref<T>(value: T): Reference<T>;
    private _value;
    private _value_origen;
    constructor(value: T);
    valueOf(): T;
    get ref(): Ref<any>;
    get value(): T;
    set value(v: T);
    on(callback: (value: T) => void): void;
    emit(): void;
    reset(): void;
    toString: () => string;
    static getRef(id: string): Reference<any> | undefined;
}
export declare function ref<T>(value: T): Reference<T>;
