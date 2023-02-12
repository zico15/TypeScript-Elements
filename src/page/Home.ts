
import { PageElement, H1Element, DivElement, ButtonElement } from '../element';
import { router } from "../router/Router";

export class Home extends PageElement {

    name: string = "Hello World Pagina 4"
    button = new ButtonElement("Test 4", 0, 0);

    constructor() {
        super("Home");
        const div = new DivElement(0, 0);
        div.setStyle("position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: yellow;")
        div.appendChild(new H1Element("Pagina 4", 0, 0), this.button);
        this.button.setOnClick(() => {
            router.load("/page4");
        })
        this.appendChild(div);
        console.log("Pagina 4");
    }


}


export default new Home();