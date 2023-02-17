import Element from "../base/Element";


export default class PageElement extends Element {



    pathname: string = "";
    title: string = "";

    constructor(title: string = "") {
        super("body", 0, 0);
        this.title = title;
    }


    public init() {
        document.body = this.element;
    }
}

export function styleLink(url: string) {
    return function _styleLink<T extends { new(...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            constructor(...args: any[]) {
                super(...args, );
                (this as any).addStyleLink(url)
                // Object.
            }
        }
    }
}

// function DecoratorName(attr: any) {
//     return function _DecoratorName<T extends { new(...args: any[]): {} }>(constr: T) {
//         return class extends constr {
//             constructor(...args: any[]) {
//                 super(...args);
//                 this.addStyleLink(attr)
//                 console.log('Did something after the original constructor!')
//                 console.log('Here is my attribute!', attr.attrName)
//             }
//         }
//     }
// }


