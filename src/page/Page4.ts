
import { PageElement, H1Element, DivElement, ButtonElement } from '../element';
import { router } from "../router/Router";

export class Page4 extends PageElement {

    name: string = "Hello World Pagina 4"
    button = new ButtonElement("Test 4", 0, 0);

    constructor() {
        super("Pagina4");
        const div = new DivElement();
        div.setStyle("position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: red;")
        div.appendChild(new H1Element("Pagina 4", 0, 0), this.button);
        this.appendChild(div);
        this.button.setOnClick(() => {
            router.load("/");
        })
        console.log("Pagina 4");
    }


}


export default new Page4();