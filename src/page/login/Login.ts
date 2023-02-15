import { PageElement, DivElement, InputElement, LabelElement, ButtonElement } from "../../element";

export default class Login extends PageElement {

    usuario = new InputElement("usuario");
    password = new InputElement("password", "password");

    constructor() {
        super("Login");
        this.addLink("stylesheet", "./src/page/login/login.css")
        const panel = new DivElement("panel");
        panel.appendChild(new LabelElement("Usuario"), this.usuario, new LabelElement("Password") ,this.password);
        const login = new ButtonElement("login");
        login.addEventListener("click", () => {
            console.log("login");
        });
        panel.appendChild(login, new LabelElement(this.usuario));
        this.appendChild(panel);
    }

}
