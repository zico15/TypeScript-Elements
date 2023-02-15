
import { PageElement, H1Element, DivElement, ButtonElement, AnchorPane } from '../element';
import { router } from "../router/Router";
import { ref } from '../factory/Ref';

export class Home extends PageElement {


    button = new ButtonElement("Test 4", 0, 0);
    a1 = ref(100)
    color = ref("#ff0000")
    color_text = ref("#000000")


    constructor() {
        super("Home");
        const pane = new AnchorPane();
        AnchorPane.setTopAnchor(this.button, this.a1);
        AnchorPane.setLeftAnchor(this.button, this.a1);
        AnchorPane.setRightAnchor(this.button, this.a1);
        AnchorPane.setBottomAnchor(this.button, this.a1);
        this.button.addStyle("color: white; font-size: 20px; border-radius: 10px; border: 0px; padding: 10px; margin: 10px;");
        this.button.style.backgroundColor = this.color;
        this.button.style.color = this.color_text;

        this.button.innerHTML("Test ", this.a1);
        this.button.addEventListener('click', () => {
        })

        this.a1.on((v) => {
            let n = parseInt(this.color.value.replaceAll("#", ""), 16) + v
            this.color.value = "#" + n.toString();
            n = parseInt(this.color_text.value.replaceAll("#", ""), 16) + v
            this.color_text.value = "#" + n.toString();
        })

        this.button.addEventListener('keypress', () => {
            this.a1.value = this.a1.value + 1;

        })
        this.button.addEventListener('keyup', () => {
            this.a1.reset();
            this.color.reset();
        })
        pane.appendChild(this.button)

        this.appendChild(pane);
        document.body.ariaValueMin
    }


}


export default new Home();