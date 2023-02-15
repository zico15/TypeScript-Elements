
import { Directive } from './Directive';

export declare interface Component extends Directive {


}




export declare interface PageComponent extends Directive {

    templateUrl?: string;
    typeComponent?: string;

}

function BaseEntity(ctr: Function) {
    ctr.prototype.id = Math.random();
    ctr.prototype.created = new Date().toLocaleString("es-ES");
  }

export declare const Component:PageComponent

@BaseEntity
export class Tes {

    constructor() {
           
    }

    test() {
        console.log("test")
    }

}

let a = new Tes()

a.id