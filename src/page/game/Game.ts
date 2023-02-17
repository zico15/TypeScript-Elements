import { ButtonElement, DivElement, LabelElement, PageElement } from "../../element";


export default class Game extends PageElement {

    user = { usuario: null, password: null };
    private simbulos = ["X", "O"];
    private simbulo = 0;

    constructor() {
        super("Game");
        this.addStyleLink("./src/page/game/game.css")

        const main = new DivElement("main");
        main.className = "game--container"
        const childs: LabelElement[] = [];

        for (let i = 0; i < 9; i++) {
            const b1 = new LabelElement()
            b1.id = "b" + i;
            childs.push(b1);
            b1.addEventListener("click", () => {
                if (b1.innerHTML() == "") {
                    b1.innerHTML(this.simbulos[this.simbulo]);
                    this.simbulo = (this.simbulo + 1) % 2;
                    setTimeout(() =>  this.checkWin(childs), 100);
                }
            });
        }
        const reset = new ButtonElement("reset");
        reset.className = "game--restart";
        reset.addEventListener("click", () => this.reset(childs));
        main.appendChild(...childs,  reset);
        this.appendChild(main);
    }

    private reset(childs: LabelElement[]) {
        childs.forEach((e) => e.innerHTML(""));
        this.simbulo = 0;
    }


    private checkWin(childs: LabelElement[]) {
        const win = [
            [childs[0], childs[1], childs[2]],
            [childs[3], childs[4], childs[5]],
            [childs[6], childs[7], childs[8]],
            [childs[0], childs[3], childs[6]],
            [childs[1], childs[4], childs[7]],
            [childs[2], childs[5], childs[8]],
            [childs[0], childs[4], childs[8]],
            [childs[2], childs[4], childs[6]],
        ]
        win.forEach((e) => {
            if (e[0].innerHTML() == e[1].innerHTML() && e[1].innerHTML() == e[2].innerHTML() && e[0].innerHTML() != "") {
                alert("Win: " + e[0].innerHTML());
                setTimeout(() => this.reset(childs), 500);
            }
        })
    }
}

