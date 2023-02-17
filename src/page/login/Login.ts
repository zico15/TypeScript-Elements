import { router } from "../../router/Router";
import { PageElement, DivElement, InputElement, LabelElement, ButtonElement } from "../../element";

// function Componente(target: Function & typeof PageElement) {
//     return class extends target {
//         constructor() {
//             super();
//             alert("teste")
//         }
//     }

// }
// function get_set(target: Object | any, propertyName: string | symbol) {
//     let _val = target[propertyName];
//     const getter = function () {
//         console.log("teste get");
//         return _val;
//     };
//     const setter = function (newVal: any) {
//         _val = `👾 ${newVal} 👾`;
//         console.log("teste set");
//     };

//     Object.defineProperty(target, propertyName, {
//         get: getter,
//         set: setter,
//         enumerable: true,
//         configurable: true
//     });
// }




// @styleLink("./src/page/login/login.css")
export default class Login extends PageElement {

    usuario = new InputElement("usuario");
    password = new InputElement("password", "password");
    // a1 = ref("teste")

    constructor() {
        super("Login");
        // alert("teste")
        this.addStyleLink("./src/page/login/login.css")
        const panel = new DivElement("panel");
        panel.appendChild(new LabelElement("Usuario"), this.usuario, new LabelElement("Password"), this.password);
        const login = new ButtonElement("login");
        login.addEventListener("click", () => {
            router.setPage("/game");
        });
        login.setOnClick(() => {

        })
        panel.appendChild(login, new LabelElement(this.usuario.value));
        this.appendChild(panel);
    }

}