import { Directive } from './Directive';
export declare interface Component extends Directive {
}
export declare interface PageComponent extends Directive {
    templateUrl?: string;
    typeComponent?: string;
}
export declare const Component: PageComponent;
export declare class Tes {
    constructor();
    test(): void;
}
